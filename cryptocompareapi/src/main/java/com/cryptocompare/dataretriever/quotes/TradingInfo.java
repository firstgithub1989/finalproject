package com.cryptocompare.dataretriever.quotes;

import java.io.IOException;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.introspect.VisibilityChecker;

public class TradingInfo {

    private Map<String, Map<String, Map<String, Map<String, Object>>>> tradingInfo;

    public TradingInfo() { 
	
    }
    
    public TradingInfo(
	    Map<String, Map<String, Map<String, Map<String, Object>>>> tradingInfo) {
	this.tradingInfo = tradingInfo;
    }

    public Map<String, Object> getRawTradingInfo(String fromSym, String toSym) throws IOException {
	return tradingInfo.get("RAW").get(fromSym)
		.get(toSym);
	//return setTradingStats(tradingStats);
    }
    
    public Map<String, Object> getDisplayTradingInfo(String fromSym, String toSym) throws IOException {
	return tradingInfo.get("DISPLAY").get(fromSym)
		.get(toSym);
	//return setTradingStats(tradingStats);
    }

    public TradingStats getTradingStats(Map<String, Object> tradingStats)
	    throws IOException {
	ObjectMapper mapper = new ObjectMapper();
	mapper.enable(DeserializationFeature.USE_BIG_INTEGER_FOR_INTS);
	mapper.setVisibilityChecker(VisibilityChecker.Std.defaultInstance()
		.withFieldVisibility(JsonAutoDetect.Visibility.ANY));
	return mapper.readValue(mapper.writeValueAsString(tradingStats),
		TradingStats.class);
    }

    public Map<String, Map<String, Map<String, Map<String, Object>>>> getTradingInfo() {
        return tradingInfo;
    }

    public void setTradingInfo(
    	Map<String, Map<String, Map<String, Map<String, Object>>>> tradingInfo) {
        this.tradingInfo = tradingInfo;
    }
}
