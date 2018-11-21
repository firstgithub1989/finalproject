package com.app.trade.web.service;

import com.app.trade.bo.BuySellHistory;
import com.app.trade.bo.CurrencyPurchases;
import com.app.trade.dao.CurrencyPurchasesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BuySellService {

    @Autowired
    CurrencyPurchasesRepository currencyPurchasesRepository;

    public void addTnxDetails(String userId, String fromSym, double volume, double rate, double totalAmt,
        String toSym, boolean isBuy) {
        CurrencyPurchases currencyPurchases = new CurrencyPurchases(userId, fromSym, volume, rate,
               totalAmt,
                toSym, isBuy);
        currencyPurchasesRepository.save(currencyPurchases);
    }

    public Map<String, Object> getBuySellHistory(String userId, String currencyName, boolean isBuy, int page) {
        Map<String, Object> data = new HashMap<>();
        Page<CurrencyPurchases> list =  currencyPurchasesRepository
                .findByUserIdAndCurrencyNameAndIsBuyOrderByTnxIdDesc(userId, currencyName, isBuy,new PageRequest(page,10) );

        List<BuySellHistory> buySellHistory = new ArrayList<>();

        list.forEach( currencyPurchases -> {
            buySellHistory.add(new BuySellHistory(currencyPurchases.getCurrency_name(),
                    currencyPurchases.getQuantity(), currencyPurchases.getPrice(),
                    currencyPurchases.gettoCurrency(), currencyPurchases.getPurchaseDate().toString()));
        });

        data.put("total",list.getTotalElements());
        data.put("data",buySellHistory);
        return data;
    }

}
