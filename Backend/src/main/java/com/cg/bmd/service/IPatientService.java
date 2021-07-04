package com.cg.bmd.service;

import java.util.List;

import com.cg.bmd.entities.*;

public interface IPatientService {

	/*
	 *
	 * @Author1 : Chetna
	 * 
	 * @Author2 : Shireesha Uppari Description : Added service interface for Patient
	 * Created : 05-06-2021 Last Modified : 06-06-2021
	 *
	 */

	public String addPatient(Patient patient);

	public Patient editPatient(Patient patient);

	public Patient getPatientById(int patientId);

	public List<Patient> getAllPatients();

	public List<Patient> getPatientListByDoctor(int doctorId);

	public List<Patient> getPatientListByDate(String appointmentDate);

	public String removePatientById(int patientId);

	public int getPatientListByEmail(String email);

	public int getPatientListByPhone(String phone);

	Patient login(String email, String password);

}
