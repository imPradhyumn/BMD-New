package com.cg.bmd.exception;

public class PatientException extends RuntimeException {

	/*
	 *
	 * @Author1 : Chetna Description : Exception class for Patient added Created :
	 * 06-06-2021 Last Modified : -------
	 *
	 */

	private static final long serialVersionUID = 1L;

	private String message;

	public PatientException(String msg) {
		super(msg);
		this.message = msg;
	}

	public String getMessage() {
		return message;
	}

}
