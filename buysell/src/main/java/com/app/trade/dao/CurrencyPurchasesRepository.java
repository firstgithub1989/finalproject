package com.app.trade.dao;

import com.app.trade.bo.CurrencyPurchases;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface CurrencyPurchasesRepository extends CrudRepository<CurrencyPurchases, String> {

    public Page<CurrencyPurchases> findByUserIdAndCurrencyNameAndIsBuyOrderByTnxIdDesc(String userId,
                                                                            String currencyName,
                                                                            boolean isBuy,
                                                                            Pageable pageable);
}
