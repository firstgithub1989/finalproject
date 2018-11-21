package com.cryptocompare;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException {
    	//System.out.println(CyrptoCompare.getPrice("BTC", "USD,EUR", null));
    	//System.out.println(CyrptoCompare.getPriceMulti("BTC,ETH", "USD,EUR", null));
	    /*System.out.println(CyrptoCompare.getTradingInfo("BTC,ETH", "USD,EUR", null)
			.getRawTradingInfo("BTC", "USD"));*/
	
	    System.out.println(CyrptoCompare.getHistoricalQuotes("BTC", "USD", null, null, "Minute"));
    }
}
