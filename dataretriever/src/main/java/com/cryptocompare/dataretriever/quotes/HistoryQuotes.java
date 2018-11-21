package com.cryptocompare.dataretriever.quotes;

public class HistoryQuotes {

    private String Response;
    private String Type;
    private String Aggregated;
    private String TimeTo;
    private String TimeFrom;
    private String FirstValueInArray;
    private ConversionType ConversionType;
    private Object RateLimit;
    private Iterable<Data> Data;
    private String HasWarning;

    public String getHasWarning() {
        return HasWarning;
    }
    public String getResponse() {
        return Response;
    }
    public String getType() {
        return Type;
    }
    public String getAggregated() {
        return Aggregated;
    }
    public Iterable<Data> getData() {
        return Data;
    }
    public String getTimeTo() {
        return TimeTo;
    }
    public String getTimeFrom() {
        return TimeFrom;
    }
    public String getFirstValueInArray() {
        return FirstValueInArray;
    }
    public ConversionType getConversionType() {
        return ConversionType;
    }
    public Object getRateLimit() {return RateLimit;}

    public void setValues(Iterable<Data> values) {
        this.Data = values;
    }

    @Override
    public String toString() {
	return "HistoryQuotes [Response=" + Response + ", Type=" + Type
		+ ", Aggregated=" + Aggregated + ", TimeTo=" + TimeTo
		+ ", TimeFrom=" + TimeFrom + ", FirstValueInArray="
		+ FirstValueInArray + ", ConversionType=" + ConversionType
		+ ", Data=" + Data + "]";
    }
}

class ConversionType {
    private String type;
    private String conversionSymbol;
    
    public String getType() {
        return type;
    }
    public String getConversionSymbol() {
        return conversionSymbol;
    }
    @Override
    public String toString() {
	return "ConversionType [type=" + type + ", conversionSymbol="
		+ conversionSymbol + "]";
    }    
    
    
}
