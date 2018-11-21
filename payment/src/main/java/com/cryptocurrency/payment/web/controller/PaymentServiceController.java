package com.cryptocurrency.payment.web.controller;

import com.cryptocurrency.payment.exceptions.XInsufficientBalance;
import com.cryptocurrency.payment.web.services.intf.PaymentServicesIntf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Map;

@RequestMapping("/pay")
@RestController
public class PaymentServiceController {

    @Autowired
    PaymentServicesIntf payService;

    @PostMapping(value = "/deposit")
    public ResponseEntity<String> depositAmount(@RequestParam("user") final String user,
                                                @RequestParam("coinName") final String coinName,
                                                @RequestParam("amount") final String amount,
                                HttpServletRequest httpServletRequest, Principal principal) {

        payService.depositAmount(user, coinName, new Double(amount));
        return new ResponseEntity<String>("AMOUNT DEPOSIT SUCCESSFUL", HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/withdraw")
    public ResponseEntity<String> withdrawAmount(@RequestParam("user") final String user,
                                                 @RequestParam("coinName") final String coinName,
                                                 @RequestParam("amount") final String amount) {

        try {
            payService.withdrawAmount(user, coinName, new Double(amount));
        } catch (XInsufficientBalance xInsufficientBalance) {
            return new ResponseEntity<String>(xInsufficientBalance.getMessage(), HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE);
        }
        return new ResponseEntity<String>("AMOUNT WITHDRAWN SUCCESSFUL", HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/getBalanceAmount/", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Double> getBalanceAmount(@RequestParam("user") final String user,
                                   @RequestParam("coinName") final String coinName) {

        double amt = payService.getBalanceAmount(user, coinName);
        return new ResponseEntity<Double>(amt, HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/updateBalanceAmount")
    public void updateBalanceAmount(@RequestParam("user") final String user,
            @RequestParam("coinName") final String coinName,
            @RequestParam("amount") final String amount) {

        payService.updateBalanceAmount(user, coinName, new Double(amount));
    }

    @GetMapping(value = "/getPayTranHistory/{user}/{coinName}/{page}/{isDeposit}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> getPayTranHistory(@PathVariable("user") final String user,
                                                 @PathVariable("coinName") final String coinName,
                                 @PathVariable("page") final Integer page,
                                 @PathVariable("isDeposit") final boolean isDeposit) {
        return payService.getPayTnxHistory(user, coinName, page, isDeposit);
    }
}
