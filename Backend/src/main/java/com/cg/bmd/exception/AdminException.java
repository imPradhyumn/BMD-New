package com.cg.bmd.exception;

public class AdminException extends Exception {

	/*
	 *
	 * @Author : Sanjay Kumar Description : Admin exception added Created :
	 * 07-06-2021 Last Modified :
	 *
	 */

	private static final long serialVersionUID = 1L;

	private String message;

	public AdminException(String msg) {
		super(msg);
		this.message = msg;
	}

	public String getMessage() {
		return message;
	}

}
