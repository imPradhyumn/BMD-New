package com.cg.bmd.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.bmd.entities.Feedback;

@Repository
public interface IFeedbackRepository extends JpaRepository<Feedback, Integer> {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Repository for Feedback added
	 * Created : 08-06-2021 Last Modified : 09-06-2021
	 *
	 */

	@Query("select feed from Feedback feed where feed.doctor.doctorId = ?1")
	List<Feedback> findByDoctorId(int doctorId);

	@Query(value = "select * from feedbacks fetch first 1 rows only", nativeQuery = true)
	public Feedback findFirstRow();

	@Transactional
	@Modifying
	@Query("delete from Feedback feed where feed.doctor.doctorId=?1")
	void deleteByDoctor(int doctorId);

	@Transactional
	@Modifying
	@Query("delete from Feedback feed where feed.patient.patientId=?1")
	void deleteByPatient(int patientId);

}
