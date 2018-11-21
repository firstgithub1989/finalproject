package com.cryptocompare.dataretriever.bo;


import java.io.Serializable;

public class Ticker implements Serializable {

    public String currency;
    public Double rate;
    public Double change;
    public Double openDay;
    public Double highDay;
    public Double lowDay;

    public Ticker (String currency, Double rate, Double change, Double openDay, Double highDay, Double lowDay) {
        this.currency = currency;
        this.rate = rate;
        this.change = change;
        this.highDay = highDay;
        this.lowDay = lowDay;
        this.openDay = openDay;
    }
}
