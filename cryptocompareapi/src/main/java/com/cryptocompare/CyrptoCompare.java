package com.cryptocompare;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.cryptocompare.dataretriever.quotes.HistoryQuotes;
import com.cryptocompare.dataretriever.quotes.TradingInfo;
import com.cryptocompare.dataretriever.util.CryptoCompareUrls;
import com.cryptocompare.dataretriever.util.GenericQueryParams;
import com.cryptocompare.dataretriever.util.QueryParamBuilder;
import com.cryptocompare.dataretriever.util.RedirectableRequest;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

@SuppressWarnings({"unchecked","rawtypes"})
public class CyrptoCompare {

    public static Map<Object,Object> getCoinList() throws JsonParseException, JsonMappingException,
		    IOException {
	RedirectableRequest<HashMap> rr = new RedirectableRequest();
	return rr.getData(CryptoCompareUrls.COIN_LIST,
		null, HashMap.class);
    }
    
    /**
     */
    public static Map<String,String> getPrice(String fromSymbol, String toSymbol,
	    String exchange) throws JsonParseException, JsonMappingException,
		    IOException {
	QueryParamBuilder qb = new QueryParamBuilder();
	qb.setParam(GenericQueryParams.FROMSYMBOL, fromSymbol)
		.setParam(GenericQueryParams.TOSYMBOLS, toSymbol)
		.setParam(GenericQueryParams.EXCHANGE, exchange);
	
	RedirectableRequest<HashMap> rr = new RedirectableRequest();
	return rr.getData(CryptoCompareUrls.PRICE,
		qb.getParamMap(), HashMap.class);
    }
    
    public static Map<String, Map<String, String>> getPriceMulti(String fromSymbol, String toSymbol,
	    String exchange) throws JsonParseException, JsonMappingException, IOException  {
	Map<String, Map<String, String>> multiful = new HashMap<>();
	
	QueryParamBuilder qb = new QueryParamBuilder();
	qb.setParam(GenericQueryParams.FROMSYMBOLS, fromSymbol)
		.setParam(GenericQueryParams.TOSYMBOLS, toSymbol)
		.setParam(GenericQueryParams.EXCHANGE, exchange);
	
	RedirectableRequest<HashMap> rr = new RedirectableRequest();
	multiful = rr.getData(CryptoCompareUrls.PRICE_MULTI,
		qb.getParamMap(), HashMap.class);
	
	return multiful;
    }
    
    public static TradingInfo getTradingInfo (String fromSymbol, String toSymbol,
	    String exchange) throws JsonParseException, JsonMappingException, IOException  {
	QueryParamBuilder qb = new QueryParamBuilder();
	qb.setParam(GenericQueryParams.FROMSYMBOLS, fromSymbol)
		.setParam(GenericQueryParams.TOSYMBOLS, toSymbol)
		.setParam(GenericQueryParams.EXCHANGE, exchange);
	
	RedirectableRequest<HashMap> rr = new RedirectableRequest();
	return new TradingInfo(rr.getData(CryptoCompareUrls.PRICE_MULTI_FULL,
		qb.getParamMap(), HashMap.class));
    }
    
    public static HistoryQuotes getHistoricalQuotes(String fromSymbol, String toSymbol,
	    String exchange, String toTs, String interval) throws JsonParseException, JsonMappingException, IOException {
	QueryParamBuilder qb = new QueryParamBuilder();
	qb.setParam(GenericQueryParams.FROMSYMBOL, fromSymbol)
		.setParam(GenericQueryParams.TOSYMBOL, toSymbol)
		//.setParam(GenericQueryParams.EXCHANGE, exchange)
		//.setParam(GenericQueryParams.TOTIMESTAMP, toTs);
		.setParam(GenericQueryParams.LIMIT, toTs);
	
	String url = null;
	switch(interval) {
	    case "Minute":
		url = CryptoCompareUrls.HISTO_MINUTE;
		break;
	    case "Hour":
		url = CryptoCompareUrls.HISTO_HOUR;
		break;
	    case "Day":
		url = CryptoCompareUrls.HISTO_DAY;
		break;
	}
	
	RedirectableRequest<HistoryQuotes> rr = new RedirectableRequest();
	return rr.getData(url,
		qb.getParamMap(), HistoryQuotes.class);
    }
    
    public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException {
	System.out.println(getTradingInfo("BTC", "BTC,INR,USD", null));	
    }
}
