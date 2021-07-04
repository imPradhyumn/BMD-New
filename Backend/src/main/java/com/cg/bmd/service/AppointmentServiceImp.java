package com.cg.bmd.service;

import java.time.LocalDate;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.cg.bmd.entities.Appointment;
import com.cg.bmd.exception.AppointmentException;
import com.cg.bmd.repository.IAppointmentRepository;

@Service
public class AppointmentServiceImp implements IAppointmentService {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Service implementation for
	 * Appointment Created : 07-06-2021 Last Modified : 09-06-2021
	 *
	 */

	@Autowired
	IAppointmentRepository repo;

	@Autowired
	IAppointmentService service;

	Logger logger = LoggerFactory.getLogger(IAppointmentService.class);

	@Override
	public Appointment addAppointment(Appointment app) throws AppointmentException {
		if (service.getByPatientAndDoctor(app.getPatient().getPatientId(), app.getDoctor().getDoctorId()))
			throw new AppointmentException("Appointment already booked for this doctor");
		return (repo.save(app));
	}

	@Override
	public List<Appointment> getAllAppointments() throws AppointmentException {
		List<Appointment> appointments = repo.findAll();
		if (appointments.isEmpty()) {
			logger.error("No appointments in DB");
			throw new AppointmentException("No appointments in DB");
		}
		return (appointments);
	}

	@Override
	public Appointment getAppointmentById(int appointmentId) throws AppointmentException {
		Appointment appointment = repo.findById(appointmentId).orElse(null);
		if (appointment == null) {
			logger.error("Appointment not found with given id");
			throw new AppointmentException("Appointment not found with given id");
		}
		return (appointment);
	}

	@Override
	public List<Appointment> getAppointmentsSortByDate() {
		List<Appointment> appointments = repo.findByOrderByAppointmentDate();
		return (appointments);
	}

	@Override
	public void deleteAppointmentById(int appointmentId) throws AppointmentException {
		Appointment appointment = repo.findById(appointmentId).orElse(null);
		if (appointment == null) {
			logger.error("Appointment not found with given id");
			throw new AppointmentException("Appointment not found with given id");
		}
		repo.deleteById(appointmentId);
		logger.warn("Removing Appointment");
	}

	@Override
	public List<Appointment> getAppointmentsByPatient(int patientId) {
		List<Appointment> appointments = repo.findAppointmentByPatient(patientId);
		if (appointments.isEmpty()) {
			logger.error("No appointments for given doctor found");
			throw new AppointmentException("No appointments for given doctor found");
		}
		return (appointments);

	}

	@Override
	public Appointment updateAppointment(Appointment appointment) throws AppointmentException {
		appointment = repo.findById(appointment.getAppointmentId()).orElse(null);
		if (appointment == null) {
			logger.error("Appointment not found with given id");
			throw new AppointmentException("Appointment not found with given id");
		}
		Appointment appointments = repo.save(appointment);
		return (appointments);
	}

	@Override
	public List<Appointment> getAppointmentsByDoctor(int doctorId) throws AppointmentException {
		List<Appointment> appointments = repo.findAppointmentByDoctor(doctorId);
		if (appointments.isEmpty()) {
			logger.error("No appointments for given doctor found");
			throw new AppointmentException("No appointments for given doctor found");
		}
		return (appointments);
	}

	@Override
	public List<Appointment> getAppointmentsByDate(String date) throws AppointmentException {
		List<Appointment> appointments;
		boolean validDate = ValidationService.validateDate(LocalDate.parse(date));
		if (validDate == false) {
			logger.error("Date format wrong. Must be (yyyy-mm-dd)");
			throw new AppointmentException("Date format wrong. Must be (yyy-mm-dd)");
		}
		appointments = repo.findByAppointmentDate(LocalDate.parse(date));
		if (appointments.isEmpty()) {
			logger.error("No appointments for given date found");
			throw new AppointmentException("No appointments for date doctor found");
		}
		return (appointments);
	}

	@Override
	public boolean getByPatientAndDoctor(int patientId, int doctorId) {
		if (repo.findByPatientAndDoctor(patientId, doctorId) != null)
			return true;
		return false;
	}

	@Override
	public Appointment approveAppointment(int patientId) throws AppointmentException {
		Appointment appointment = repo.findById(patientId).orElse(null);
		if (appointment == null) {
			logger.error("Appointment for given id not found");
			throw new AppointmentException("Appointment for given id not found");
		}
		appointment.setStatus("Approved");
		return (repo.save(appointment));
	}

	@Override
	public Appointment cancelAppointment(int patientId) throws AppointmentException {
		Appointment appointment = repo.findById(patientId).orElse(null);
		if (appointment == null) {
			logger.error("Appointment for given id not found");
			throw new AppointmentException("Appointment for given id not found");
		}
		appointment.setStatus("Cancelled");
		return (repo.save(appointment));
	}

	@Override
	public Appointment cancelAppointmentByBoth(int patientId, int doctorId) throws AppointmentException {
		Appointment appointment = repo.findAppointmentByPatientAndDoctor(patientId, doctorId);
		if (appointment == null) {
			logger.error("Appointment for given id not found");
			throw new AppointmentException("Appointment for given id not found");
		}
		appointment.setStatus("Cancelled");
		return (repo.save(appointment));
	}

	@Override
	public Appointment approveAppointmentByBoth(int patientId, int doctorId) throws AppointmentException {

		Appointment appointment = repo.findAppointmentByPatientAndDoctor(patientId, doctorId);
		if (appointment == null) {
			logger.error("Appointment for given id not found");
			throw new AppointmentException("Appointment for given id not found");
		}
		appointment.setStatus("Approved");
		return (repo.save(appointment));
	}

	@Override
	public void deleteAppointmentsByDoctorId(int doctorId) throws AppointmentException {
		List<Appointment> appointments = repo.findAppointmentByDoctor(doctorId);
		if (appointments.isEmpty()) {
			logger.error("Appointments for given id not found");
			throw new AppointmentException("Appointments for given id not found");
		}
		repo.deleteByDoctor(doctorId);
	}

	@Override
	public void deleteAppointmentByPatientId(int patientId) throws AppointmentException {
		Appointment appointment = repo.findByPatientId(patientId);
		if (appointment == null) {
			logger.error("Appointment for given id not found");
			throw new AppointmentException("Appointment for given id not found");
		}
		repo.deleteByPatient(patientId);
	}

	@Override
	public String getAppointmentStatus(int patientId) throws AppointmentException {
		if (repo.existsByPatientId(patientId) == null) {
			logger.error("Patient for given id not found");
			throw new AppointmentException("Patient for given id not found");
		}
		return repo.findStatusByPatientId(patientId);
	}

}
