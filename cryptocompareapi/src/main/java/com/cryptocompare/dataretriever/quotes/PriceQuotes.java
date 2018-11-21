package com.cryptocompare.dataretriever.quotes;

import java.util.Map;

public class PriceQuotes {
    private Map<String, Double> price;

    public Map<String, Double> getPrice() {
        return price;
    }

    public void setPrice(Map<String, Double> price) {
        this.price = price;
    }

    @Override
    public String toString() {
	return "PriceQuotes [price=" + price + "]";
    }    
    
}
