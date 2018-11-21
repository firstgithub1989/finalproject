package com.app.trade.bo;

import java.sql.Timestamp;
import java.util.Date;

public class BuySellHistory {
    private String coinName;
    private double volume;
    private double rate;
    private String fromSym;
    private String purchaseDate;

    public BuySellHistory(String coinName, double volume, double rate, String fromSym, String purchaseDate) {
        this.coinName = coinName;
        this.volume = volume;
        this.rate = rate;
        this.fromSym = fromSym;
        this.purchaseDate = purchaseDate;
    }

    public String getCoinName() {
        return coinName;
    }

    public void setCoinName(String coinName) {
        this.coinName = coinName;
    }

    public double getVolume() {
        return volume;
    }

    public void setVolume(double volume) {
        this.volume = volume;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public String getFromSym() {
        return fromSym;
    }

    public void setFromSym(String fromSym) {
        this.fromSym = fromSym;
    }

    public String getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(String purchaseDate) {
        this.purchaseDate = purchaseDate;
    }
}
