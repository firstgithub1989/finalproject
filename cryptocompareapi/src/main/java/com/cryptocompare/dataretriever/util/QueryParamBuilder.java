package com.cryptocompare.dataretriever.util;

import java.util.HashMap;
import java.util.Map;

public class QueryParamBuilder {

    private Map<String, String> queryParamMap;

    public QueryParamBuilder() {
	this.queryParamMap = new HashMap<>();
    }

    public QueryParamBuilder setParam(String param, String value) {
	        queryParamMap.put(param, value);
	        return this;
    }
    
    public Map<String, String> getParamMap() {
	return queryParamMap;
    }
}
