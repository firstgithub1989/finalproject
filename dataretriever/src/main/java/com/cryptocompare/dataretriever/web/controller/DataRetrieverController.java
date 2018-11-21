package com.cryptocompare.dataretriever.web.controller;

import java.io.IOException;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.LongAccumulator;
import java.util.concurrent.atomic.LongAdder;
import java.util.stream.Stream;


import com.cryptocompare.dataretriever.bo.Ticker;
import com.cryptocompare.dataretriever.bo.HistoryData;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cryptocompare.dataretriever.cache.CacheData;

import reactor.core.Disposable;
import reactor.core.Disposables;
import reactor.core.publisher.Flux;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;
import reactor.util.function.Tuple2;

import javax.servlet.http.HttpServletRequest;

//@FeignClient("data-retriever")
@RestController
@RequestMapping("/crypto")
public class DataRetrieverController {

    @Autowired
    HttpServletRequest httpServletRequest;
    public static Map<String, LongAdder> disposableMap = new ConcurrentHashMap<>();
    public static Map<String, LongAdder> disposableHistMap = new ConcurrentHashMap<>();

    @GetMapping(value = "/{fromSym}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<List<Ticker>> getPriceAll(@PathVariable("fromSym") final String fromSym)
	    throws IOException {

        String session = httpServletRequest.getSession().getId();

        disposableMap.putIfAbsent(httpServletRequest.getSession().getId(), new LongAdder());
        LongAdder la  = disposableMap.get(httpServletRequest.getSession().getId());
        la.add(1);
        long value = la.longValue();
        Flux<Long> interval = Flux.interval(Duration.ofSeconds(0), Duration.ofSeconds(5));

        Flux<List<Ticker>> data = Flux.fromStream(Stream.generate(() ->
                CacheData.getTicker1(fromSym, session, value)));

        return Flux.zip(data, interval).map(Tuple2::getT1);
    }
    
    @GetMapping(value = "/{fromSym}/{toSym}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getRate(@PathVariable("fromSym") final String fromSym,
                                  @PathVariable("toSym") final String toSym
                    ) throws IOException {

        httpServletRequest.getHeader("userid");
    	return new ResponseEntity<String>(CacheData.getRate(fromSym, toSym), HttpStatus.OK);
    }

    @GetMapping(value = "/histdata/{fromSym}/{toSym}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Map<String, List<HistoryData>>> getHistoPrice(@PathVariable("fromSym") final String fromSym,
                                                              @PathVariable("toSym") final String toSym) {

        String session = httpServletRequest.getSession().getId();

        disposableHistMap.putIfAbsent(httpServletRequest.getSession().getId(), new LongAdder());
        LongAdder la  = disposableHistMap.get(httpServletRequest.getSession().getId());
        la.add(1);
        long value = la.longValue();

        Flux<Long> interval = Flux.interval(Duration.ofSeconds(0), Duration.ofSeconds(5));
        return Flux.zip(Flux.fromStream(Stream.generate(() -> CacheData.getHistData(fromSym,toSym, session, value))), interval).
                map(Tuple2::getT1);
    }

}


class Rate {
    public String rate;

    public Rate(String rate) {
        this.rate = rate;
    }
}