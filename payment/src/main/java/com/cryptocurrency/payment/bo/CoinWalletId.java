package com.cryptocurrency.payment.bo;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class CoinWalletId implements Serializable{
        private String userId;
        private String coinName;

    public CoinWalletId() {
    }

    public CoinWalletId(String userId, String coinName) {
        this.userId = userId;
        this.coinName = coinName;
    }

    public String getUserId() {
            return userId;
        }

        public void setUserId(String userId) {
            this.userId = userId;
        }

        public String getCoinName() {
            return coinName;
        }

        public void setCoinName(String coinName) {
            this.coinName = coinName;
        }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CoinWalletId that = (CoinWalletId) o;

        if (!userId.equals(that.userId)) return false;
        return coinName.equals(that.coinName);
    }

    @Override
    public int hashCode() {
        int result = userId.hashCode();
        result = 31 * result + coinName.hashCode();
        return result;
    }
}
