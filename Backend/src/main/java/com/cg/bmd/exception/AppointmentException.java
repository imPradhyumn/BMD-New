package com.cg.bmd.exception;

public class AppointmentException extends RuntimeException {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Exception for Appointment Created :
	 * 07-06-2021 Last Modified : ------
	 *
	 */

	private static final long serialVersionUID = 1L;

	private String message;

	public AppointmentException(String msg) {
		super(msg);
		this.message = msg;
	}

	public String getMessage() {
		return message;
	}

}
