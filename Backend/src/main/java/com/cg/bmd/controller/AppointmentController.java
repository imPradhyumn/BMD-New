package com.cg.bmd.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cg.bmd.entities.Appointment;

import com.cg.bmd.service.IAppointmentService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/bmd/appointment")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Appointment controller added Created
	 * : 07-06-2021 Last Modified : 09-06-2021 Parameters :
	 * Appointment/patientId/doctorId Return types : Appointment/List<Appointment>
	 *
	 */

	@Autowired
	IAppointmentService service;

	Logger logger = LoggerFactory.getLogger(AppointmentController.class);

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add")
	public Appointment addAppointment(@RequestBody Appointment appointment) {
		logger.info("Appointment Added");
		System.out.println(appointment);
		return service.addAppointment(appointment);
	}

	@GetMapping("/getlist")
	public List<Appointment> getAllAppointments() {
		logger.info("Fetching all appointments");
		return service.getAllAppointments();
	}

	@GetMapping("/getstatus/{patientId}")
	public String getAppointmentStatus(@PathVariable("patientId") int patientId) {
		return service.getAppointmentStatus(patientId);
	}

	@GetMapping("get/appointmentbyid/{id}")
	public Appointment getAppointmentById(@PathVariable("id") int appointmentId) {
		logger.info("Fetching appointment with id " + appointmentId);
		return service.getAppointmentById(appointmentId);
	}

	@GetMapping("get/appointmentbydate/{date}")
	public List<Appointment> getAppointmentByDate(@PathVariable("date") String date) {
		logger.info("Fetching appointments for date " + date);
		return service.getAppointmentsByDate(date);
	}

	@GetMapping("get/appointmentbydoctorid/{id}")
	public List<Appointment> getAppointmentByDoctorId(@PathVariable("id") int doctorId) {
		logger.info("Fetching appointments for doctor id " + doctorId);
		return service.getAppointmentsByDoctor(doctorId);
	}

	@GetMapping("get/appointmentbypatientid/{id}")
	public List<Appointment> getAppointmentByPatientId(@PathVariable("id") int patientId) {
		logger.info("Fetching appointments for patient id " + patientId);
		return service.getAppointmentsByPatient(patientId);
	}

	@DeleteMapping("/deletebyid/{id}")
	public void deleteAppointmentById(@PathVariable("id") int appointmentId) {
		logger.warn("Appointment deleted with id " + appointmentId);
		service.deleteAppointmentById(appointmentId);
	}

	@PutMapping("/update")
	public Appointment updateAppointment(@RequestBody Appointment appointment) {
		logger.info("Updated");
		return service.updateAppointment(appointment);
	}

	@PutMapping("/cancel/{patientId}")
	public Appointment cancelAppointment(@PathVariable("patientId") int patientId) {
		Appointment appointment = service.cancelAppointment(patientId);
		logger.warn("Appointment cancelled for patient id " + patientId);
		return appointment;
	}

	@PutMapping("/approve/{patientId}")
	public Appointment approveAppointment(@PathVariable("patientId") int patientId) {
		Appointment appointment = service.approveAppointment(patientId);
		logger.info("Appointment approved for patient id " + patientId);
		return appointment;
	}

	@PutMapping("/approvebyboth/{patientId}/{doctorId}")
	public Appointment approveAppointmentByBoth(@PathVariable("patientId") int patientId,
			@PathVariable("doctorId") int doctorId) {
		Appointment appointment = service.approveAppointmentByBoth(patientId, doctorId);
		logger.info("Appointment approved for patient id " + patientId);
		return appointment;
	}

	@PutMapping("/cancelbyboth/{patientId}/{doctorId}")
	public Appointment cancelAppointmentByBoth(@PathVariable("patientId") int patientId,
			@PathVariable("doctorId") int doctorId) {
		Appointment appointment = service.cancelAppointmentByBoth(patientId, doctorId);
		logger.info("Appointment cancelled for patient id " + patientId);
		return appointment;
	}

}
