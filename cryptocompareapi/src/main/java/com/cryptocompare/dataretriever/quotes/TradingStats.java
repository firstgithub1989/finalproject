package com.cryptocompare.dataretriever.quotes;

public class TradingStats {

	private String TYPE;
	private String MARKET;
	private String FROMSYMBOL;
	private String TOSYMBOL;
	private String FLAGS;
	private String PRICE;
	private String LASTUPDATE;
	private String LASTVOLUME;
	private String LASTVOLUMETO;
	private String LASTTRADEID;
	private String VOLUME24HOUR;
	private String VOLUME24HOURTO;
	private String OPEN24HOUR;
	private String HIGH24HOUR;
	private String LOW24HOUR;
	private String LASTMARKET;
	private String CHANGE24HOUR;
	private String CHANGEPCT24HOUR;
	private String VOLUMEDAY;
	private String VOLUMEDAYTO;
	private String SUPPLY;
	private String MKTCAP;
	private String OPENDAY;
	private String HIGHDAY;
	private String LOWDAY;
	private String CHANGEDAY;
	private String CHANGEPCTDAY;
	private String TOTALVOLUME24H;
	private String TOTALVOLUME24HTO;
	private String BID;
	private String OFFER;
	private String AVG;
		
	public String getAVG() {
	    return AVG;
	}
	public String getOFFER() {
	    return OFFER;
	}
	public String getBID() {
	    return BID;
	}
	public String getTOTALVOLUME24HTO() {
	    return TOTALVOLUME24HTO;
	}
	public String getTOTALVOLUME24H() {
	    return TOTALVOLUME24H;
	}
	public String getCHANGEPCTDAY() {
	    return CHANGEPCTDAY;
	}
	public void setCHANGEPCTDAY(String cHANGEPCTDAY) {
	    CHANGEPCTDAY = cHANGEPCTDAY;
	}
	public String getTYPE() {
	    return TYPE;
	}
	public String getMARKET() {
	    return MARKET;
	}
	public String getFROMSYMBOL() {
	    return FROMSYMBOL;
	}
	public String getTOSYMBOL() {
	    return TOSYMBOL;
	}
	public String getFLAGS() {
	    return FLAGS;
	}
	public String getPRICE() {
	    return PRICE;
	}
	public String getLASTUPDATE() {
	    return LASTUPDATE;
	}
	public String getLASTVOLUME() {
	    return LASTVOLUME;
	}
	public String getLASTVOLUMETO() {
	    return LASTVOLUMETO;
	}
	public String getLASTTRADEID() {
	    return LASTTRADEID;
	}
	public String getVOLUME24HOUR() {
	    return VOLUME24HOUR;
	}
	public String getVOLUME24HOURTO() {
	    return VOLUME24HOURTO;
	}
	public String getOPEN24HOUR() {
	    return OPEN24HOUR;
	}
	public String getHIGH24HOUR() {
	    return HIGH24HOUR;
	}
	public String getLOW24HOUR() {
	    return LOW24HOUR;
	}
	public String getLASTMARKET() {
	    return LASTMARKET;
	}
	public String getCHANGE24HOUR() {
	    return CHANGE24HOUR;
	}
	public String getCHANGEPCT24HOUR() {
	    return CHANGEPCT24HOUR;
	}
	public String getVOLUMEDAY() {
	    return VOLUMEDAY;
	}
	public String getVOLUMEDAYTO() {
	    return VOLUMEDAYTO;
	}
	public String getOPENDAY() {
	    return OPENDAY;
	}
	public String getHIGHDAY() {
	    return HIGHDAY;
	}
	public String getLOWDAY() {
	    return LOWDAY;
	}
	public String getSUPPLY() {
	    return SUPPLY;
	}
	public String getMKTCAP() {
	    return MKTCAP;
	}
	public String getCHANGEDAY() {
	    return CHANGEDAY;
	}
	
	@Override
	public String toString() {
	    return "TradingStats [TYPE=" + TYPE + ", MARKET=" + MARKET
		    + ", FROMSYMBOL=" + FROMSYMBOL + ", TOSYMBOL=" + TOSYMBOL
		    + ", FLAGS=" + FLAGS + ", PRICE=" + PRICE + ", LASTUPDATE="
		    + LASTUPDATE + ", LASTVOLUME=" + LASTVOLUME
		    + ", LASTVOLUMETO=" + LASTVOLUMETO + ", LASTTRADEID="
		    + LASTTRADEID + ", VOLUME24HOUR=" + VOLUME24HOUR
		    + ", VOLUME24HOURTO=" + VOLUME24HOURTO + ", OPEN24HOUR="
		    + OPEN24HOUR + ", HIGH24HOUR=" + HIGH24HOUR + ", LOW24HOUR="
		    + LOW24HOUR + ", LASTMARKET=" + LASTMARKET
		    + ", CHANGE24HOUR=" + CHANGE24HOUR + ", CHANGEPCT24HOUR="
		    + CHANGEPCT24HOUR + ", VOLUMEDAY=" + VOLUMEDAY
		    + ", VOLUMEDAYTO=" + VOLUMEDAYTO + ", SUPPLY=" + SUPPLY
		    + ", MKTCAP=" + MKTCAP + ", OPENDAY=" + OPENDAY
		    + ", HIGHDAY=" + HIGHDAY + ", LOWDAY=" + LOWDAY + "]";
	}
	
	
}
