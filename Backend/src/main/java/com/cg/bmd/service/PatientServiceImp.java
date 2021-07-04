package com.cg.bmd.service;

import java.time.LocalDate;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.bmd.entities.Patient;
import com.cg.bmd.exception.PatientException;
import com.cg.bmd.repository.IAppointmentRepository;
import com.cg.bmd.repository.IFeedbackRepository;
import com.cg.bmd.repository.IPatientRepository;

@Service
public class PatientServiceImp implements IPatientService {

	/*
	 *
	 * @Author1 : Chetna
	 * 
	 * @Author2 : Shireesha Uppari Description : Service implmentation for Patient
	 * Created : 06-06-2021 Last Modified : 07-06-2021
	 *
	 */

	@Autowired
	IPatientRepository repo;

	@Autowired
	IAppointmentRepository appointmentRepository;

	@Autowired
	IFeedbackRepository feedbackRepository;

	Logger logger = LoggerFactory.getLogger(IPatientService.class);

	@Autowired
	IPatientService obj;

	@Override
	public String addPatient(Patient patient) throws PatientException {
		boolean validPhone = ValidationService.validatePhone(patient.getPatientPhone());
		boolean validEmail = ValidationService.validateEmail(patient.getEmail());
		boolean validGender = ValidationService.validateGender(patient.getGender());

		if (obj.getPatientListByEmail(patient.getEmail()) == 1)
			throw new PatientException("Email already exists");

		if (obj.getPatientListByEmail(patient.getPatientPhone()) == 1)
			throw new PatientException("Same phone number exists");

		if (validPhone && validGender && validEmail) {
			patient = repo.save(patient);
			logger.info("Patient added successfully");
			return "Added";
		}

		if (validPhone == false)
			logger.error("Please enter valid phone number");

		if (validEmail == false)
			logger.error("Please enter valid email");

		if (validGender == false)
			logger.error("Please enter valid gender");

		else {
			throw new PatientException("Patient not added");
		}
		return null;
	}

	@Override
	public Patient editPatient(Patient patient) throws PatientException {
		return repo.save(patient);
	}

	@Override
	public int getPatientListByEmail(String email) {
		return repo.findByEmail(email).size();
	}

	@Override
	public int getPatientListByPhone(String phone) {
		return repo.findByPatientPhone(phone).size();
	}

	@Override
	public String removePatientById(int patientId) throws PatientException {
		Patient patient = repo.findById(patientId).orElse(null);
		if (patient == null) {
			logger.error("Patient with given id not found!!");
			throw new PatientException("Patient with given id not found!!");
		}
		appointmentRepository.deleteByPatient(patientId);
		feedbackRepository.deleteByPatient(patientId);
		repo.deleteById(patientId);
		logger.warn("Patient deleted");
		return "Deleted";
	}

	@Override
	public Patient getPatientById(int patientId) throws PatientException {
		Patient patient = repo.findById(patientId).orElse(null);
		if (patient == null) {
			logger.error("Patient with given id not found!!");
			throw new PatientException("Patient with given id not found!!");
		}
		return patient;
	}

	@Override
	public List<Patient> getAllPatients() throws PatientException {
		List<Patient> patientList = repo.findAll();
		if (patientList.isEmpty()) {
			logger.error("No patients in DB");
			throw new PatientException("No patients in DB");
		}
		return patientList;
	}

	@Override
	public List<Patient> getPatientListByDoctor(int doctorId) throws PatientException {
		List<Patient> patientList = repo.getPatientListByDoctorId(doctorId);
		if (patientList.isEmpty()) {
			logger.error("No patients found for given doctor id");
			throw new PatientException("No patients found for given doctor id");
		}
		return patientList;
	}

	@Override
	public List<Patient> getPatientListByDate(String date) throws PatientException {
		LocalDate appointmentDate = LocalDate.parse(date);
		List<Patient> patientList = repo.getPatientListByAppointmentDate(appointmentDate);
		if (patientList.isEmpty()) {
			logger.error("No patients for given date");
			throw new PatientException("No patients for given date");
		}
		return patientList;
	}

	@Override
	public Patient login(String email, String password) throws PatientException {
		Patient patient = repo.findByEmailAndPassword(email, password);
		if (patient == null) {
			logger.error("Login failed!! Wrong credentials");
			throw new PatientException("Login failed!! Wrong credentials");
		}
		return patient;
	}

}
