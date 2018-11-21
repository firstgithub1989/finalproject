package com.cryptocompare.dataretriever.util;

public interface GenericQueryParams {

    public String param = null;
    
    public boolean isRequired = false;
    
    public String getParam();

    public boolean isRequired();
    
    public static final String FROMSYMBOL = "fsym";
    public static final String FROMSYMBOLS = "fsyms";
    public static final String TOSYMBOL = "tsym";
    public static final String TOSYMBOLS = "tsyms";
    public static final String EXCHANGE = "e";
    public static final String EXTRAPARAMS = "extraParams";
    public static final String SIGN = "sign";
    public static final String TRYCONVERSION = "tryConversion";
    public static final String AVGTYPE = "avgType";
    public static final String UTCHOURDIFF = "UTCHourDiff";
    public static final String TOTIMESTAMP = "toTs";
    public static final String TIMESTAMP = "ts";
    public static final String AGGREGATE = "aggregate";
    public static final String LIMIT = "limit";
    public static final String ALLDATA = "allData";

}
