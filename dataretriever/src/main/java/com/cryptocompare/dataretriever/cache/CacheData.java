package com.cryptocompare.dataretriever.cache;

import com.cryptocompare.CyrptoCompare;
import com.cryptocompare.dataretriever.bo.HistoryData;
import com.cryptocompare.dataretriever.bo.QuoteTicker;
import com.cryptocompare.dataretriever.bo.Ticker;
import com.cryptocompare.dataretriever.quotes.HistoryQuotes;
import com.cryptocompare.dataretriever.quotes.TradingInfo;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import reactor.core.Disposable;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

@Component
public class CacheData {

    static String[] coinsList = new String[]{"INR", "USD", "BTC", "ETH", "LTC", "XRP"};
    private static Map<String, TradingInfo> priceData = new ConcurrentHashMap<>();
    private static Map<String, HistoryQuotes> histData = new ConcurrentHashMap<>();
    private static List<String> coinPairs = new ArrayList<>();
    String coins = "INR,USD,BTC,ETH,LTC,XRP";

    private static Map<String, Long> disposableTicker = new ConcurrentHashMap<>();
    private static Map<String, Long> disposableHist = new ConcurrentHashMap<>();

    static {
        for(String coin : coinsList) {
            for(String coin1 : coinsList) {
                if(!coin.equals(coin1))
                    coinPairs.add(coin + "," + coin1);
            }
        }
    }

    public static List<Ticker> getTicker1(String fromSym, String session, long value) {
        QuoteTicker stats = new QuoteTicker();

        long current = (disposableTicker.containsKey(session)) ? disposableTicker.get(session) : 0;
        if(value > current )
            disposableTicker.put(session, value);

        if(disposableTicker.get(session) > value) {
            throw new RuntimeException();
        }

        List<Ticker> tickers = new ArrayList<>();
        for (String coin : coinsList) {
            try {
                if(fromSym.equalsIgnoreCase(coin) || coin.equalsIgnoreCase("INR")) continue;
                Map<String, Object> info = priceData.get(coin).getRawTradingInfo(coin, fromSym);

                tickers.add(new Ticker(coin,
                   info.get("PRICE") instanceof Double ? new Double((Double) info.get("PRICE")): new Double((Integer) info.get("PRICE")),
                   new Double((Double) info.get("CHANGEPCT24HOUR")),
                   info.get("OPENDAY") instanceof Double ?
                           new Double((Double) info.get("OPENDAY")): new Double((Integer) info.get("OPENDAY")),
                   info.get("HIGHDAY") instanceof Double ?
                           new Double((Double) info.get("HIGHDAY")): new Double((Integer) info.get("HIGHDAY")),
                   info.get("LOWDAY") instanceof Double ?
                           new Double((Double) info.get("LOWDAY")): new Double((Integer) info.get("LOWDAY"))
                 ));



            } catch (Exception e) {
                //System.out.println(coin );
                //System.out.println(fromSym );
                // e.printStackTrace();
            }
        }
        return tickers;
    }

    public static Map<String, Double> getTicker(String fromSym) {
        Map<String, Double> stats = new HashMap<>();
        for (String coin : coinsList) {
            try {
                if (priceData.get(fromSym).getRawTradingInfo(fromSym, coin).get("PRICE") instanceof Double)
                    stats.put(coin, new Double(((Double) priceData.get(fromSym).getRawTradingInfo(fromSym, coin).get("PRICE"))));
                else {
                    stats.put(coin, new Double(((Integer) priceData.get(fromSym).getRawTradingInfo(fromSym, coin).get("PRICE"))));
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return stats;
    }

    public static List<Map<String, Object>> getPriceData(String fromSym) {
        List<Map<String, Object>> stats = new ArrayList<>();
        for (String coin : coinsList) {
            try {
                stats.add(priceData.get(fromSym).getRawTradingInfo(fromSym, coin));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return stats;
    }

    public static Map<String, List<HistoryData>> getHistData(String fromSym, String toSym, String session, long value) {

        long current = disposableHist.containsKey(session) ?  disposableHist.get(session) : 0;
        if(value > current )
            disposableHist.put(session, value);

        if(disposableHist.get(session) > value) {
            throw new RuntimeException();
        }

        HistoryQuotes hq = histData.get(fromSym + "," + toSym);
        List<HistoryData> historyDataList = new ArrayList<>();
        hq.getData().forEach(data ->
                historyDataList.add(new HistoryData(data.getTime(), data.getClose(),
                        data.getHigh(), data.getLow(), data.getOpen(), data.getVolumefrom()))
        );

        Map<String, List<HistoryData>> hist = new HashMap<>();

        hist.put("values", historyDataList);

        return hist;
    }

    public static String getRate(String fromSym, String toSym) throws IOException {
        TradingInfo info = priceData.get(fromSym);
        return info.getTradingStats(info.getRawTradingInfo(fromSym, toSym)).getPRICE();
    }

    @Scheduled(fixedRate = 10000)
    public void getData() throws JsonParseException, JsonMappingException, IOException {
        for (String coin : coinsList) {
            priceData.put(coin, CyrptoCompare.getTradingInfo(coin, coins, null));
        }

        for(String coinPair: coinPairs) {
            String[] pairs = coinPair.split(",");
            histData.put(coinPair,
                    CyrptoCompare.getHistoricalQuotes(
                            pairs[0], pairs[1], "", "100", "Minute"));
        }

    }
}
