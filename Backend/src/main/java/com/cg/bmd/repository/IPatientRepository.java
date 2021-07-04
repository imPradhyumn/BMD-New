package com.cg.bmd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

import com.cg.bmd.entities.Patient;

@Repository
public interface IPatientRepository extends JpaRepository<Patient, Integer> {

	/*
	 *
	 * @Author1 : Chetna
	 * 
	 * @Author2 : Shireesha Uppari Description : Repository for Patient added
	 * Created : 06-06-2021 Last Modified : 08-06-2021
	 *
	 */

	@Query("select app.patient from Appointment app where app.appointmentDate =?1")
	List<Patient> getPatientListByAppointmentDate(LocalDate date);

	@Query("select app.patient from Appointment app where app.doctor.doctorId =?1")
	List<Patient> getPatientListByDoctorId(int doctorId);

	@Query("select patient from Patient patient where patient.email = ?1 and patient.password=?2")
	Patient findByEmailAndPassword(String email, String pasword);

	@Query(value = "select * from patients fetch first 1 rows only", nativeQuery = true)
	public Patient findFirstRow();

	public List<Patient> findByEmail(String email);

	public List<Patient> findByPatientPhone(String phone);

}
