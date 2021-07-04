package com.cg.bmd.service;

import java.time.LocalDate;
import java.util.regex.Pattern;

public class ValidationService {
	
	private ValidationService() {}
	
	public static boolean validatePhone(String phone) {
		return Pattern.matches("\\d{5}([- ]*)\\d{5}", phone);  
	}

	public static boolean validateEmail(String email) {
		return Pattern.matches("^(.+)@(.+)$", email);
	}

	public static boolean validatePassword(String password) {
		return Pattern.matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", password);
	}
	
	public static boolean validateName(String name) {
		return Pattern.matches("[A-Za-z]+[ ]*[A-Za-z]*", name);
	}
	
	public static boolean validateGender(String gender) {
		return (gender.equalsIgnoreCase("Male") || gender.equalsIgnoreCase("Female"));
	}

	public static boolean validateDate(LocalDate date) {
		return Pattern.matches("[0-2]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}",date.toString());
	}
}
