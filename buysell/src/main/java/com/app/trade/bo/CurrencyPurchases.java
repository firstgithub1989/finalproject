package com.app.trade.bo;


import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "cc_currency_purchases")
public class CurrencyPurchases {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long tnxId;
    private String userId;
    private String currencyName;
    private double quantity;
    private double price;
    private double totalAmt;
    private Timestamp purchaseDate = new Timestamp(new Date().getTime());
    private String toCurrency;
    private boolean isBuy;

    public CurrencyPurchases () {

    }

    public CurrencyPurchases(String userId, String currencyName, double quantity, double price, double totalAmt, String toCurrency,
                             boolean isBuy) {

        this.userId = userId;
        this.currencyName = currencyName;
        this.quantity = quantity;
        this.price = price;
        this.totalAmt = totalAmt;
        this.toCurrency = toCurrency;
        this.isBuy = isBuy;
    }

    public long getTnxId() {
        return tnxId;
    }

    public void setTnxId(long tnxId) {
        this.tnxId = tnxId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCurrency_name() {
        return currencyName;
    }

    public void setCurrency_name(String currency_name) {
        this.currencyName = currency_name;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getTotoalAmt() {
        return totalAmt;
    }

    public void setTotoalAmt(double totoalAmt) {
        this.totalAmt = totoalAmt;
    }

    public Timestamp getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Timestamp purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public String gettoCurrency() {
        return toCurrency;
    }

    public void settoCurrency(String toCurrency) {
        this.toCurrency = toCurrency;
    }

    public boolean isBuy() {
        return isBuy;
    }

    public void setBuy(boolean buy) {
        isBuy = buy;
    }
}
