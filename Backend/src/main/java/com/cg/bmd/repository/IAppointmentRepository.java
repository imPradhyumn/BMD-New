package com.cg.bmd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import com.cg.bmd.entities.Appointment;

@Repository
public interface IAppointmentRepository extends JpaRepository<Appointment, Integer> {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Appointment repository addded
	 * Created : 07-06-2021 Last Modified : 08-06-2021
	 *
	 */

	@Query("select app from Appointment app where app.doctor.doctorId = ?1")
	List<Appointment> findAppointmentByDoctor(int doctorId);

	@Query("select app from Appointment app where app.patient.patientId = ?1")
	List<Appointment> findAppointmentByPatient(int patientId);

	@Query("select app from Appointment app where app.patient.patientId = ?1 and app.doctor.doctorId = ?2")
	Appointment findAppointmentByPatientAndDoctor(int patientId, int doctorId);

	List<Appointment> findByAppointmentDate(LocalDate date);

	@Query("update Appointment app set app.status='Cancelled' where app.patient.patientId=?1 and app.doctor.doctorId=?2")
	public Appointment cancelAppointmentByBoth(int patientId, int doctorId);

	List<Appointment> findByOrderByAppointmentDate();

	@Transactional
	@Modifying
	@Query("delete from Appointment app where app.doctor.doctorId=?1")
	void deleteByDoctor(int doctorId);

	@Transactional
	@Modifying
	@Query("delete from Appointment app where app.patient.patientId=?1")
	void deleteByPatient(int patientId);

	@Query("select app from Appointment app where app.patient.patientId=?1")
	Appointment findByPatientId(int patientId);

	@Query("select app.status from Appointment app where app.patient.patientId =?1")
	String findStatusByPatientId(int patientId);

	@Query("select app.appointmentId from Appointment app where app.patient.patientId =?1")
	String existsByPatientId(int patientId);

	@Query("select app from Appointment app where app.patient.patientId =?1 and app.doctor.doctorId =?2")
	Appointment findByPatientAndDoctor(int patientId, int doctorId);

	@Query(value = "select * from appointments fetch first 1 rows only", nativeQuery = true)
	public Appointment findFirstRow();

}
