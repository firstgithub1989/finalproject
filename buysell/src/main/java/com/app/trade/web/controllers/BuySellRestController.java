package com.app.trade.web.controllers;

import com.app.trade.web.service.BuySellService;
import com.netflix.discovery.EurekaClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Map;


@RestController(value = "/crypto")
public class BuySellRestController {

	@LoadBalanced
	RestTemplate restTemplate = new RestTemplate();

	@Autowired
	EurekaClient eurekaClient;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
	private BuySellService buySellService;

    @Transactional
	@PostMapping(value = "/buy/")
	public ResponseEntity<String> buy(@RequestParam("userId") final String userId,
									  @RequestParam("volume") final double volume,
									  @RequestParam("fromSym") final String fromSym,
									  @RequestParam("toSym") final String toSym,
					   HttpServletRequest httpServletRequest) {
		String rate =  getRate(fromSym, toSym);
		double rated = new BigDecimal(rate).setScale(6, RoundingMode.CEILING).doubleValue() ;
		double fromAmount = getBalanceAmount(userId, fromSym);
		double toAmount = getBalanceAmount(userId, toSym);

		double toBalAmount = volume * new Double(rated);

		if(toAmount < toBalAmount) {
			return new ResponseEntity<String>("BUY FALIED AT RATE: " + rated +
					" DUE TO LOW BALANCE", HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE);
		}

		buySellService.addTnxDetails(userId, fromSym, volume, new Double(rated), toBalAmount, toSym, true);
		updateBalanceAmount(userId, fromSym, volume+ fromAmount);
		updateBalanceAmount(userId, toSym, toAmount - toBalAmount);
		return new ResponseEntity<String>("BUY CONFIRMED AT RATE: " + rated , HttpStatus.ACCEPTED);
	}

	@PostMapping(value = "/sell/")
	public ResponseEntity<String> sell(@RequestParam("userId") final String userId,
									   @RequestParam("volume") final double volume,
									   @RequestParam("fromSym") final String fromSym,
									   @RequestParam("toSym") final String toSym,
					    HttpServletRequest httpServletRequest) {
		String rate =  getRate(fromSym, toSym);
		double rated = new BigDecimal(rate).setScale(6, RoundingMode.CEILING).doubleValue() ;
		double toAmount = getBalanceAmount(userId, toSym);
		double fromAmount = getBalanceAmount(userId, fromSym);
		double toBalAmount = volume * new Double(rated);
		buySellService.addTnxDetails(userId, fromSym, volume, new Double(rated), toBalAmount, toSym, false);
		updateBalanceAmount(userId,fromSym, fromAmount - volume);
		updateBalanceAmount(userId,toSym, toAmount + toBalAmount);
		return new ResponseEntity<String>("SELL CONFIRMED AT RATE: " + rated, HttpStatus.OK);
	}

	@GetMapping(value = "/getBuySellHistory/{userId}/{coinName}/{isBuy}/{page}")
	public Map<String, Object> getBuySellHistory (@PathVariable("userId") final String user,
						@PathVariable("coinName") final String coinName,
						@PathVariable("isBuy") final boolean isBuy,
						@PathVariable("page") final Integer page) {
		return buySellService.getBuySellHistory(user, coinName, isBuy, page);
	}


	private String getRate(String fromSym, String toSym) {
		ServiceInstance discoveryClientInstance = discoveryClient.getInstances("data-retriever").get(0);
		//InstanceInfo instanceInfo = (InstanceInfo)eurekaClient.getInstancesById("data-retriever").get(0);
		ResponseEntity<String> response = restTemplate.exchange("http://"+ discoveryClientInstance.getHost()
						+ ":"	+ discoveryClientInstance.getPort() + "/crypto/" + fromSym + "/" + toSym,
				HttpMethod.GET, null, new ParameterizedTypeReference<String>() {
				});

		return response.getBody();
	}

	private double getBalanceAmount(String userId, String coinName) {
		ServiceInstance discoveryClientInstance = discoveryClient.getInstances("payment").get(0);
		//InstanceInfo instanceInfo = (InstanceInfo)eurekaClient.getInstancesById("data-retriever").get(0);
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("http://"+ discoveryClientInstance.getHost()
				+ ":"	+ discoveryClientInstance.getPort() + "/pay/getBalanceAmount/")
				.queryParam("user", userId)
				.queryParam("coinName", coinName);

		ResponseEntity<Double> response = restTemplate.exchange(builder.toUriString(),
				HttpMethod.GET, null, new ParameterizedTypeReference<Double>() {
				});

		return response.getBody();
	}

	private void updateBalanceAmount(String userId, String coinName, double amount) {
		ServiceInstance discoveryClientInstance = discoveryClient.getInstances("payment").get(0);
		String url = "http://"+ discoveryClientInstance.getHost()
				+ ":"	+ discoveryClientInstance.getPort() + "/pay/updateBalanceAmount";

		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url)
		.queryParam("user", userId)
		.queryParam("coinName", coinName)
		.queryParam("amount", new Double(amount).toString());

		//InstanceInfo instanceInfo = (InstanceInfo)eurekaClient.getInstancesById("data-retriever").get(0);
		restTemplate.exchange(builder.toUriString(),
				HttpMethod.POST, null, new ParameterizedTypeReference<String>() {
				});
	}
}
