package com.cryptocompare.dataretriever.exceptions;

public class XMandatoryParamNotPresent extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public XMandatoryParamNotPresent(String param) {
		super("Mandatory query parameter " + param + " no present.");
	}
}
