package com.cg.bmd.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.cg.bmd.entities.AvailabilityDate;
import com.cg.bmd.entities.Doctor;
import com.cg.bmd.exception.DoctorException;
import com.cg.bmd.repository.IAppointmentRepository;
import com.cg.bmd.repository.IAvailabilityDateRepository;
import com.cg.bmd.repository.IDoctorRepository;
import com.cg.bmd.repository.IFeedbackRepository;

@Service
public class DoctorServiceImp implements IDoctorService {

	/*
	 *
	 * @Author1 : Shivam Singh
	 * 
	 * @Author2 : Pradhyumn Sharma Description : Service implementation for Doctor
	 * Created : 06-06-2021 Last Modified : 07-06-2021
	 *
	 */

	@Autowired
	IDoctorRepository doctorRepository;

	@Autowired
	IAppointmentRepository appointmentRepository;

	@Autowired
	IAvailabilityDateRepository availabilityDateRepository;

	@Autowired
	IFeedbackRepository feedbackRepository;

	Logger logger = LoggerFactory.getLogger(DoctorServiceImp.class);

	@Autowired
	DoctorServiceImp obj;

	@Override
	public String addDoctor(Doctor doctor) throws DoctorException {
		boolean validPhone = ValidationService.validatePhone(doctor.getDoctorPhone());
		boolean validEmail = ValidationService.validateEmail(doctor.getEmail());
		boolean validPassword = ValidationService.validatePassword(doctor.getPassword());

		if (obj.getDoctorListByEmail(doctor.getEmail()) == true)
			throw new DoctorException("Email already exists");

		if (obj.getDoctorListByEmail(doctor.getDoctorPhone()) == true)
			throw new DoctorException("Same phone number exists");

		if (validPhone && validEmail) {
			doctorRepository.save((doctor));
			return "Added";
		}

		else if (!validPhone)
			logger.warn("Please enter valid phone number");

		else if (!validEmail)
			logger.warn("Please enter valid email");

		else if (!validPassword)
			logger.warn("Please enter valid password");

		return null;
	}

	@Override
	public Doctor updateDoctorProfile(Doctor doctor) throws DoctorException {
		if (!doctorRepository.existsById(doctor.getDoctorId())) {
			logger.warn("No doctor found with given id");
			throw new DoctorException("No doctor found with given id");
		}

		return doctorRepository.save(doctor);

	}

	@Override
	public List<Doctor> getDoctorByName(String name) throws DoctorException {
		boolean validName = ValidationService.validateName(name);
		if (!validName) {
			logger.warn("Incorrect characters in name");
			throw new DoctorException("Incorrect characters in name");
		}
		List<Doctor> doctorList = doctorRepository.findByDoctorName(name);
		if (doctorList.isEmpty()) {
			logger.warn("No doctor found with given name");
			throw new DoctorException("No doctor found with given name in DB");
		}

		return doctorList;
	}

	@Override
	public boolean getDoctorListByEmail(String email) {
		return doctorRepository.findByEmail(email) != null ? true : false;
	}

	@Override
	public boolean getDoctorListByPhone(String phone) {
		return doctorRepository.findByDoctorPhone(phone) != null ? true : false;

	}

	@Override
	public Doctor addAvailability(AvailabilityDate availabilityDate) throws DoctorException {
		AvailabilityDate date = availabilityDate;
		LocalDate end = date.getEndDate();
		LocalDate from = date.getFromDate();
		if (from.compareTo(end) > 0) {
			logger.warn("End date should be greater than from date");
			throw new DoctorException("End date should be greater than from date");
		}
		availabilityDateRepository.save(date);
		try {
			return null;// date.getDoctor();
		} catch (Exception e) {
			logger.error(e.getMessage());
			return null;
		}
	}

	@Override
	public Doctor getDoctorById(int id) throws DoctorException {
		Doctor doctor = doctorRepository.findById(id).orElse(null);
		if (doctor == null) {
			logger.warn("No doctor found with given id");
			throw new DoctorException("NotFound!! Check id agaain");
		}
		return doctor;
	}

	@Override
	public String removeDoctorById(int doctorId) throws DoctorException {
		Doctor doctor = doctorRepository.findById(doctorId).orElse(null);
		if (doctor == null) {
			logger.warn("No doctor found with given id");
			throw new DoctorException("NotFound!! Check doctor id again");
		}
		appointmentRepository.deleteByDoctor(doctorId);
		// availabilityDateRepository.deleteDoctor(doctorId);
		feedbackRepository.deleteByDoctor(doctorId);
		doctorRepository.deleteById(doctorId);
		return "Deleted";
	}

	@Override
	public List<Doctor> getDoctorList() throws DoctorException {
		List<Doctor> doctorList = doctorRepository.findAll();
		if (doctorList.isEmpty()) {
			logger.warn("No doctor in database");
			throw new DoctorException("Empty List returned");
		}
		return doctorList;
	}

	@Override
	public List<Doctor> getDoctorBySpeciality(String speciality) throws DoctorException {
		List<Doctor> doctorList = doctorRepository.findBySpeciality(speciality);
		if (doctorList.isEmpty()) {
			logger.warn("No doctor found with given speciality");
			throw new DoctorException("NotFound!! No doctor with given speciality");
		}
		return doctorList;
	}

	/*
	 * @Override public Doctor addDoctor(Doctor doctor) { return
	 * doctorRepository.save(doctor); }
	 */

	@Override
	public Doctor login(String email, String password) throws DoctorException {
		Doctor doctor = doctorRepository.findByEmailAndPassword(email, password);
		if (doctor == null) {
			logger.error("Login failed!! Wrong credentials");
			throw new DoctorException("Login failed!! Wrong credentials");
		}
		return doctor;
	}

}
