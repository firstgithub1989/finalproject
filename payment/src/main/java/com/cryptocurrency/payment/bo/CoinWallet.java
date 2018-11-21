package com.cryptocurrency.payment.bo;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.math.BigDecimal;

@Table(name="cc_wallet")
@Entity
public class CoinWallet {

    @EmbeddedId
    private CoinWalletId coinWalletId;

    private double balanceAmount;

    public CoinWallet() {
    }

    public CoinWallet(CoinWalletId coinWalletId, double balanceAmount) {
        this.coinWalletId = coinWalletId;
        this.balanceAmount = balanceAmount;
    }

    public double getBalanceAmount() {
        return balanceAmount;
    }

    public void setBalanceAmount(double balanceAmount) {
        this.balanceAmount = balanceAmount;
    }
}

