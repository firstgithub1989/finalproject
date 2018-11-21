package com.cryptocompare.dataretriever.bo;

public class HistoryData {

    private String date;
    private String close;
    private String high;
    private String low;
    private String open;
    private String volume;

    public HistoryData(String date, String close, String high, String low, String open, String volume) {
        this.date = date;
        this.close = close;
        this.high = high;
        this.low = low;
        this.open = open;
        this.volume = volume;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getClose() {
        return close;
    }

    public void setClose(String close) {
        this.close = close;
    }

    public String getHigh() {
        return high;
    }

    public void setHigh(String high) {
        this.high = high;
    }

    public String getLow() {
        return low;
    }

    public void setLow(String low) {
        this.low = low;
    }

    public String getOpen() {
        return open;
    }

    public void setOpen(String open) {
        this.open = open;
    }

    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }
}
