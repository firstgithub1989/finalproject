package com.cryptocurrency.payment.bo;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "cc_payment_details")
public class PaymentDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long tnxId;

    @NotNull
    private String userId;
    private String coinName;
    private double amount;
    private double balanceAmount;
    private Timestamp tnxDate;
    private boolean isDeposit;

    public PaymentDetails() {

    }

    public PaymentDetails(String userId, String coinName, double amount, double balanceAmount, boolean isDeposit) {
        this.userId = userId;
        this.coinName = coinName;
        this.amount = amount;
        this.balanceAmount = balanceAmount;
        this.isDeposit = isDeposit;
        this.tnxDate = new Timestamp(new Date().getTime());
    }

    public Long getTnxId() {
        return tnxId;
    }

    public void setTnxId(Long tnxId) {
        this.tnxId = tnxId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getBalanceAmount() {
        return balanceAmount;
    }

    public void setBalanceAmount(double balanceAmount) {
        this.balanceAmount = balanceAmount;
    }

    public Timestamp getTnxDate() {
        return tnxDate;
    }

    public void setTnxDate(Timestamp tnxDate) {
        this.tnxDate = tnxDate;
    }

    public boolean isDeposit() {
        return isDeposit;
    }

    public void setDeposit(boolean deposit) {
        isDeposit = deposit;
    }

    public String getCoinName() {
        return coinName;
    }

    public void setCoinName(String coinName) {
        this.coinName = coinName;
    }
}
