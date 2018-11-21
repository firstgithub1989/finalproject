package com.cryptocurrency.payment.web.services;

import com.cryptocurrency.payment.bo.CoinWallet;
import com.cryptocurrency.payment.bo.CoinWalletId;
import com.cryptocurrency.payment.bo.PayTransactionDetails;
import com.cryptocurrency.payment.bo.PaymentDetails;
import com.cryptocurrency.payment.dao.CoinWalletRepository;
import com.cryptocurrency.payment.dao.PaymentDetailsRepository;
import com.cryptocurrency.payment.exceptions.XInsufficientBalance;
import com.cryptocurrency.payment.web.services.intf.PaymentServicesIntf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PaymentServiceImpl implements PaymentServicesIntf{

    @Autowired
    CoinWalletRepository coinWalletRepository;

    @Autowired
    PaymentDetailsRepository paymentDetailsRepository;

    @Override
    public void depositAmount(String userId, String coinName, double amount) {
        double balanceAmount = this.getBalanceAmount(userId, coinName) + amount;
        PaymentDetails paymentDetails = new PaymentDetails(userId, coinName, amount, balanceAmount, true);
        paymentDetailsRepository.save(paymentDetails);
        updateBalanceAmount(userId, coinName, balanceAmount);
    }

    @Override
    public void withdrawAmount(String userId, String coinName, double amount) throws XInsufficientBalance {
        double balanceAmount = this.getBalanceAmount(userId, coinName) - amount;
        if(balanceAmount < 0) {
            throw new XInsufficientBalance("Insufficient Balance");
        }
        PaymentDetails paymentDetails = new PaymentDetails(userId, coinName, amount, balanceAmount, false);
        paymentDetailsRepository.save(paymentDetails);
        updateBalanceAmount(userId, coinName, balanceAmount);
    }

    @Override
    public double getBalanceAmount(String userId, String coinName) {

        CoinWallet coinWallet = coinWalletRepository.findOne(new CoinWalletId(userId,coinName));

        return coinWallet != null ? coinWallet.getBalanceAmount() : 0;
    }

    @Override
    public void updateBalanceAmount(String userId, String coinName, double amount) {
        coinWalletRepository.save(new CoinWallet(new CoinWalletId(userId, coinName), amount));
    }

    @Override
    public Map<String, Object> getPayTnxHistory(String userId, String coinName, int page, boolean isDeposit) {
        Map<String, Object> data = new HashMap<>();
        Page<PaymentDetails> paymentDetails = paymentDetailsRepository.findByUserIdAndCoinNameAndIsDepositOrderByTnxIdDesc(
                userId, coinName, isDeposit,new PageRequest(page,10) );

        List<PayTransactionDetails> payTransactionDetailsList = new ArrayList<>();
        paymentDetails.forEach(p -> payTransactionDetailsList.add(
                new PayTransactionDetails(p.getCoinName(), p.getTnxDate().toString(), p.isDeposit(), p.getAmount())));

        data.put("total",paymentDetails.getTotalElements());
        data.put("data",payTransactionDetailsList);
        return data;
    }
}
