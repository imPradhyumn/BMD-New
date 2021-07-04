package com.cg.bmd.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.cg.bmd.entities.*;
import com.cg.bmd.exception.DoctorException;
import com.cg.bmd.service.IDoctorService;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bmd/doctor")
public class DoctorController {

	/*
	 *
	 * @Author : Shivam Singh Description : Doctor controller added Created :
	 * 06-06-2021 Last Modified : 08-06-2021 Parameters : Doctor Return type :
	 * Doctor/String/List<Doctor>
	 *
	 */

	@Autowired
	IDoctorService service;

	// AvailabilityDate availabilityDate;

	Logger logger = LoggerFactory.getLogger(DoctorController.class);

	@PostMapping("/add")
	public String addDoctor(@RequestBody Doctor doctor) {
		String response = service.addDoctor(doctor);
		return response;
	}

	// @PostMapping("/addavailability")
	// public Doctor addAvailability(@RequestBody AvailabilityDate availabilityDate)
	// {
	// logger.info("Availability add for doctor " +
	// availabilityDate.getDoctor().getDoctorId());
	// return service.addAvailability(availabilityDate);
	// }

	@GetMapping("/login/{email}/{password}")
	public Doctor login(@PathVariable("email") String email, @PathVariable("password") String password) {
		return service.login(email, password);
	}

	@GetMapping("/getbyid/{doctorId}")
	public Doctor getDoctorById(@PathVariable("doctorId") int doctorId) throws DoctorException {
		Doctor doctor = service.getDoctorById(doctorId);
		if (doctor == null) {
			logger.error("DoctorController : Doctor with given id not found!!");
			throw new DoctorException("DoctorController : Doctor with given id not found!!");
		} else {
			logger.info("Fetching doctor by id " + doctorId);
		}
		return doctor;
	}

	@GetMapping("/getlist")
	public List<Doctor> getDoctorList() throws DoctorException {
		List<Doctor> doctorList = service.getDoctorList();
		return doctorList;
	}

	@GetMapping("/getbyspeciality/{speciality}")
	public List<Doctor> getDoctorListBySpeciality(@PathVariable("speciality") String speciality)
			throws DoctorException {
		List<Doctor> doctorList = service.getDoctorBySpeciality(speciality);
		return doctorList;
	}

	// @GetMapping("/getbyspecialityandlocation/{speciality}/{loc}")
	// public List<Doctor>
	// getDoctorListBySpecialityAndLocation(@PathVariable("speciality") String
	// speciality,
	// @PathVariable("loc") String loc) throws DoctorException {
	// List<Doctor> doctorList =
	// service.getDoctorBySpecialityAndLocation(speciality, loc);
	// return doctorList;
	// }

	@GetMapping("/getbyname/{name}")
	public List<Doctor> getDoctorByName(@PathVariable("name") String doctorName) throws DoctorException {
		List<Doctor> doctor = service.getDoctorByName(doctorName);
		return doctor;
	}

	@PutMapping("/updateprofile")
	public Doctor updateDoctor(@RequestBody Doctor doctor) throws DoctorException {
		doctor = service.updateDoctorProfile(doctor);
		if (doctor == null) {
			logger.info("Failed to update doctor");
			throw new DoctorException("Failed to update doctor");
		} else
			return doctor;
	}

	@DeleteMapping("/deletedoctorbyid/{doctorId}")
	public String removeDoctorById(@PathVariable("doctorId") int doctorId) throws DoctorException {
		logger.warn("Doctor deleted with id " + doctorId);
		return service.removeDoctorById(doctorId);
	}

}
