package com.zzq.springcloud.service;

import com.zzq.springcloud.entity.Payment;

public interface PaymentService
{
    public int create(Payment payment);

    public Payment getPaymentById(Long id);
}

