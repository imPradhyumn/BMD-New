package com.cg.bmd.service;

import java.util.List;

import com.cg.bmd.entities.*;

public interface IDoctorService {

	/*
	 *
	 * @Author1 : Shivam Singh Description : Service interface added for Doctor
	 * Created : 06-06-2021 Last Modified : 07-06-2021
	 *
	 */

	List<Doctor> getDoctorBySpeciality(String speciality);

	Doctor getDoctorById(int id);

	public List<Doctor> getDoctorByName(String name);

	Doctor login(String email, String password);

	List<Doctor> getDoctorList();

	boolean getDoctorListByEmail(String email);

	boolean getDoctorListByPhone(String phone);

	public String addDoctor(Doctor doctor);
	// public Doctor addDoctor(Doctor doctor);

	String removeDoctorById(int doctorId);

	Doctor updateDoctorProfile(Doctor doctor);

	// public List<Doctor> getDoctorByAvailabilityDays(String days);

	// List<Doctor> getDoctorBySpecialityAndLocation(String speciality, String
	// location);

	Doctor addAvailability(AvailabilityDate availabilityDate);

}
