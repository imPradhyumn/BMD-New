package com.cg.bmd.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

//Controller level exception-handling
@RestControllerAdvice
public class BookMyDoctorException {

	/*
	 *
	 * @Author : All team members Description : Appointment entity added Created :
	 * 05-06-2021 Last Modified : 07-06-2021
	 *
	 */

	@ExceptionHandler(DoctorException.class)
	public ResponseEntity<ErrorInfo> handler(DoctorException exception, HttpServletRequest request) {
		ErrorInfo error = new ErrorInfo();
		error.setMessage(exception.getMessage());
		error.setUrl(request.getRequestURL().toString());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(AdminException.class)
	public ResponseEntity<ErrorInfo> handler(AdminException exception, HttpServletRequest request) {
		ErrorInfo error = new ErrorInfo();
		error.setMessage(exception.getMessage());
		error.setUrl(request.getRequestURL().toString());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(PatientException.class)
	public ResponseEntity<ErrorInfo> handler(PatientException exception, HttpServletRequest request) {
		ErrorInfo error = new ErrorInfo();
		error.setMessage(exception.getMessage());
		error.setUrl(request.getRequestURL().toString());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(AppointmentException.class)
	public ResponseEntity<ErrorInfo> handler(AppointmentException exception, HttpServletRequest request) {
		ErrorInfo error = new ErrorInfo();
		error.setMessage(exception.getMessage());
		error.setUrl(request.getRequestURL().toString());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(FeedbackException.class)
	public ResponseEntity<ErrorInfo> handler(FeedbackException exception, HttpServletRequest request) {
		ErrorInfo error = new ErrorInfo();
		error.setMessage(exception.getMessage());
		error.setUrl(request.getRequestURL().toString());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

}
