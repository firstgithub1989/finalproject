package com.cryptocurrency.payment.dao;

import com.cryptocurrency.payment.bo.CoinWallet;
import com.cryptocurrency.payment.bo.CoinWalletId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface CoinWalletRepository extends CrudRepository<CoinWallet, CoinWalletId>{
}
