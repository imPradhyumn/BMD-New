package com.cg.bmd.exception;

public class DoctorException extends RuntimeException {

	/*
	 *
	 * @Author1 : Shivam Singh Description : Exception class added for Doctor
	 * Created : 06-06-2021 Last Modified : ------
	 *
	 */

	private static final long serialVersionUID = 1L;

	private String message;

	public DoctorException(String msg) {
		super(msg);
		this.message = msg;
	}

	public String getMessage() {
		return message;
	}

}
