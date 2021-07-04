package com.cg.bmd.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.bmd.entities.AvailabilityDate;

@Repository
public interface IAvailabilityDateRepository extends JpaRepository<AvailabilityDate, Integer> {

	/*
	 *
	 * @Author : Shivam Singh Description : AvailabilityDate repository addded
	 * Created : 06-06-2021 Last Modified : -------
	 *
	 */

	// @Transactional
	// @Modifying
	// @Query("delete from AvailabilityDate date where date.doctor.doctorId=?1")
	// void deleteDoctor(int doctorId);

}
