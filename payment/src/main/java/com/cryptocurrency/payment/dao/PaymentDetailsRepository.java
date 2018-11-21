package com.cryptocurrency.payment.dao;

import com.cryptocurrency.payment.bo.PaymentDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface PaymentDetailsRepository extends CrudRepository<PaymentDetails, Integer> {

    public Page<PaymentDetails> findByUserIdAndCoinNameAndIsDepositOrderByTnxIdDesc(String userId,
                                                                         String coinName,
                                                                         boolean isDeposit,Pageable pageable);

}
