package com.cg.bmd.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.bmd.entities.Patient;
import com.cg.bmd.service.IPatientService;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bmd/patient")
public class PatientController {

	/*
	 *
	 * @Author1 : Chetna
	 * 
	 * @Author2 : Shireesha Uppari Description : Controller for Patient Created :
	 * 07-06-2021 Last Modified : 09-06-2021 Parameters : Patient Return types :
	 * Patient/String/List<Patient>
	 *
	 */

	@Autowired
	IPatientService service;

	Logger logger = LoggerFactory.getLogger(PatientController.class);

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add")
	public String addPatient(@RequestBody Patient patient) {
		return service.addPatient(patient);
	}

	// get mappings
	@GetMapping("/getpatientbyid/{patientId}")
	public Patient getPatientById(@PathVariable("patientId") int patientId) {
		return service.getPatientById(patientId);
	}

	@GetMapping("/login/{email}/{password}")
	public Patient login(@PathVariable("email") String email, @PathVariable("password") String password) {
		return service.login(email, password);
	}

	@GetMapping("/getlist")
	public List<Patient> getAllPatients() {
		return service.getAllPatients();
	}

	@GetMapping("/getlist/bydoctorid/{doctorId}")
	public List<Patient> getPatientListByDoctor(@PathVariable("doctorId") int doctorId) {
		return service.getPatientListByDoctor(doctorId);
	}

	@GetMapping("/getlist/byappointmentdate/{date}")
	public List<Patient> getPatientListByDate(@PathVariable("date") String appointmentDate) {
		return service.getPatientListByDate(appointmentDate);
	}

	@PutMapping("/updateprofile")
	public Patient editPatient(@RequestBody Patient patient) {
		return service.editPatient(patient);
	}

	@DeleteMapping("/deletebyid/{patientId}")
	public String removePatient(@PathVariable("patientId") int patientId) {
		logger.warn("Patient deleted with id " + patientId);
		service.removePatientById(patientId);
		return "Deleted";
	}
}
