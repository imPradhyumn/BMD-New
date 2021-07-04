package com.cg.bmd.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.bmd.entities.Doctor;

@Repository
public interface IDoctorRepository extends JpaRepository<Doctor, Integer> {

	/*
	 *
	 * @Author1 : Shivam Singh
	 * 
	 * @Author2 : Pradhyumn Sharma Description : Repository for Doctor Created :
	 * 05-06-2021 Last Modified : 08-06-2021
	 *
	 */

	public List<Doctor> findByDoctorName(String name);

	// @Transactional
	// @Modifying
	// @Query("delete from AvailabilityDate date where date.doctor.doctorId=?1")
	// void deleteByDoctor(int doctorId);

	@Query("select d from Doctor d where  d.email = ?1 and d.password=?2")
	Doctor findByEmailAndPassword(String email, String password);

	@Query(value = "select * from doctors fetch first 1 rows only", nativeQuery = true)
	public Doctor findFirstRow();

	public Doctor findByEmail(String email);

	public Doctor findByDoctorPhone(String doctorPhone);

	public List<Doctor> findBySpeciality(String speciality);

	// @Query("select d from Doctor d where d.speciality=?1 && d.location like
	// %?2%")
	// public List<Doctor> findBySpecialityAndLocation(String speciality, String
	// Location);

	public List<Doctor> findByAvailabilityDaysContaining(String days);

	// @Query("select d from Doctor d where d.speciality=?1 && d.location=?2 &&
	// d.hospitalName=?3")
	// public List<Doctor> findBySpecialityAndLocationAndHospitalName(String
	// speciality, String Location, String hospital);

	// @Query("select d from Doctor d where d.speciality=?1 && d.hospitalName like
	// %?2%")
	// public List<Doctor> findBySpecialityAndHospitalName(String speciality, String
	// hospital);

}
