package com.cryptocompare.dataretriever.quotes;

public class Data {
    private String time;
    private String close;
    private String high;
    private String low;
    private String open;
    private String volumefrom;
    private String volumeto;

    public String getTime() {
        return time;
    }
    public String getClose() {
        return close;
    }
    public String getHigh() {
        return high;
    }
    public String getLow() {
        return low;
    }
    public String getOpen() {
        return open;
    }
    public String getVolumefrom() {
        return volumefrom;
    }
    public String getVolumeto() {
        return volumeto;
    }
    @Override
    public String toString() {
	return "Data [time=" + time + ", close=" + close + ", high=" + high
		+ ", low=" + low + ", open=" + open + ", volumefrom="
		+ volumefrom + ", volumeto=" + volumeto + "]";
    }


}
