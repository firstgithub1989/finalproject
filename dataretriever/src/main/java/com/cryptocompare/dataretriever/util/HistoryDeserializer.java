package com.cryptocompare.dataretriever.util;

import com.cryptocompare.dataretriever.quotes.HistoryQuotes;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;

import java.io.IOException;

public class HistoryDeserializer{//} extends StdDeserializer<HistoryQuotes> {


    public HistoryQuotes deserialize(JsonParser parser, DeserializationContext ctxt)
            throws IOException, JsonProcessingException {
        HistoryQuotes historyQuotes = new HistoryQuotes();
//        ObjectCodec codec = parser.getCodec();
//        JsonNode node = codec.readTree(parser);
//
//        // try catch block
//        JsonNode colorNode = node.get("Data");
//        String color = colorNode.;
//        car.setColor(color);
//        return car;
        return historyQuotes;
    }
}
