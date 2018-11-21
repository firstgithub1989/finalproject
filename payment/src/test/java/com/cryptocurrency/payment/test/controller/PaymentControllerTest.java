package com.cryptocurrency.payment.test.controller;

import com.cryptocurrency.payment.bo.PayTransactionDetails;
import com.cryptocurrency.payment.web.controller.PaymentServiceController;
import com.cryptocurrency.payment.web.services.intf.PaymentServicesIntf;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.List;

@RunWith(SpringRunner.class)
@WebMvcTest(value = PaymentServiceController.class)
public class PaymentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PaymentServicesIntf paymentService;

    List<PayTransactionDetails> payDetails;

    @Before
    public void init() {
       /* payDetails = new ArrayList<>();
        payDetails.add(new PayTransactionDetails(new Date(), true, 102032.0));
        payDetails.add(new PayTransactionDetails(new Date(), false, 1022.0));*/
    }

    @Test
    public void getPayTranDetailsTest() throws Exception {
        /*Mockito.when(paymentService.getPayTnxHistory(Mockito.anyString())).thenReturn(payDetails);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/pay/getPayTranHistory/1")
                .contentType(MediaType.APPLICATION_JSON);

        mockMvc.perform(requestBuilder)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].deposit", Is.is(true)))
                .andExpect(jsonPath("$[0].amount", Is.is(102032.0)))
                .andExpect(jsonPath("$[1].deposit", Is.is(false)))
                .andExpect(jsonPath("$[1].amount", Is.is(1022.0)));*/
    }

    @Test
    public void depositAmountTest() throws Exception {
       /* Mockito.when(paymentService.getPayTnxHistory(Mockito.anyString())).thenReturn(payDetails);


        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/pay/deposit/1/10223.0")
                .contentType(MediaType.APPLICATION_JSON_VALUE);

        MvcResult result = mockMvc.perform(requestBuilder)
                .andReturn();

        Assert.assertEquals("Amount Deposit Successful",result.getResponse().getContentAsString());*/
    }

    @Test
    public void withdrawAmountTest() throws Exception {
        /*Mockito.when(paymentService.getPayTnxHistory(Mockito.anyString())).thenReturn(payDetails);


        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/pay/withdraw/1/10223.0")
                .contentType(MediaType.APPLICATION_JSON_VALUE);

        MvcResult result = mockMvc.perform(requestBuilder)
                .andReturn();

        Assert.assertEquals("Amount Withdrawal Successful",result.getResponse().getContentAsString());*/
    }

    @Test
    public void getINRAmountTest() throws Exception {
        /*Mockito.when(paymentService.getINRAmount(Mockito.anyString())).thenReturn(12356.00);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/pay/getINRAmount/1")
                .contentType(MediaType.TEXT_PLAIN_VALUE);

        Assert.assertEquals("12356",mockMvc.perform(requestBuilder)
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString());
*/
    }
}
