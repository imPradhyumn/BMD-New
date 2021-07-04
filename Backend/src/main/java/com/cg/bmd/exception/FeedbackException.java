package com.cg.bmd.exception;

public class FeedbackException extends Exception {

	/*
	 *
	 * @Author1 : Pradhyumn Sharma Description : Exception handling for Feedback
	 * added Created : 09-06-2021 Last Modified : -------
	 *
	 */

	private static final long serialVersionUID = 1L;

	private String message;

	public FeedbackException(String msg) {
		super(msg);
		this.message = msg;
	}

	public String getMessage() {
		return message;
	}

}
