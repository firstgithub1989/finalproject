package com.cryptocompare.dataretriever.bo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class QuoteTicker implements Serializable{
    List<Ticker> quotes = new ArrayList<>();

    public List<Ticker> getQuotes() {
        return quotes;
    }

    public void setQuotes(List<Ticker> quotes) {
        this.quotes = quotes;
    }
}
