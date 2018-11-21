package com.cryptocompare.dataretriever.util;

import java.io.IOException;
import java.util.Map;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.introspect.VisibilityChecker;

public class RedirectableRequest<T> {

    public T getData(String url, Map<String, String> queryParams,
	    Class<T> clazz) throws JsonParseException, JsonMappingException, IOException {
	Client client = ClientBuilder.newClient();
	WebTarget target = client.target(url);

	if (queryParams != null) {
	    for (Map.Entry<String, String> entry : queryParams.entrySet()) {
		target = target.queryParam(entry.getKey(), entry.getValue());
	    }
	}
	/*
	 * queryParams.forEach((k,v)-> { w.queryParam(k, v); });
	 */

	ObjectMapper ob = new ObjectMapper();
		
	ob.setVisibilityChecker(VisibilityChecker.Std.defaultInstance()
		.withFieldVisibility(JsonAutoDetect.Visibility.ANY));
	return ob.readValue((String)target.request().accept(MediaType.APPLICATION_JSON_TYPE)
		.get(String.class), clazz);
	
	/*return target.request().accept(MediaType.APPLICATION_JSON_TYPE)
		.get(String.class);*/
    }
}
