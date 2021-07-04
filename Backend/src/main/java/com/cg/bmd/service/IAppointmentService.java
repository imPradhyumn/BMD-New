package com.cg.bmd.service;

import java.util.List;

import com.cg.bmd.entities.*;

public interface IAppointmentService {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Appointment service interface added
	 * Created : 07-06-2021 Last Modified : 08-06-2021
	 *
	 */

	public Appointment addAppointment(Appointment appointment);

	public List<Appointment> getAppointmentsByPatient(int patientId);

	// public Appointment addAppointment(Appointment appointment);
	public List<Appointment> getAllAppointments();

	public List<Appointment> getAppointmentsSortByDate();

	public Appointment getAppointmentById(int appointmentId);

	public void deleteAppointmentById(int appointmentId);

	public Appointment cancelAppointmentByBoth(int patientId, int doctorId);

	public boolean getByPatientAndDoctor(int patientId, int doctorId);

	public Appointment approveAppointmentByBoth(int patientId, int doctorId);

	public void deleteAppointmentsByDoctorId(int doctorId);

	public void deleteAppointmentByPatientId(int patientId);

	public Appointment updateAppointment(Appointment appointment);

	public List<Appointment> getAppointmentsByDoctor(int doctorId);

	List<Appointment> getAppointmentsByDate(String string);

	Appointment approveAppointment(int patientId);

	Appointment cancelAppointment(int patientId);

	String getAppointmentStatus(int patientId);

}
