package com.cg.bmd.entities;

import java.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "availability_dates")
public class AvailabilityDate {

	/*
	 *
	 * @Author1 : Shivam Singh
	 * 
	 * @Author2 : Pradhyumn Sharma Description : Entity AvailabilityDate Added
	 * Created : 05-06-2021 Last Modified : 06-06-2021
	 *
	 */

	@Id
	@GeneratedValue(generator = "availdate_seq", strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = "availdate_seq", sequenceName = "availabilitydate_sequence", allocationSize = 1)
	@NotNull(message = "Availability Id can't be null")
	private int availabilityId;

	@NotNull(message = "Please provide a date")
	private LocalDate fromDate;

	@NotNull(message = "Please provide a date")
	private LocalDate endDate;

	// @OneToOne
	// @JoinColumn(name = "doctor_id")
	// private Doctor doctor;

	// getters and setters

	public int getAvailabilityId() {
		return this.availabilityId;
	}

	public void setAvailabilityId(int availabilityId) {
		this.availabilityId = availabilityId;
	}

	public LocalDate getFromDate() {
		return fromDate;
	}

	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "AvailabilityDate [availabilityId=" + availabilityId + ", fromDate=" + fromDate + ", endDate=" + endDate
				+ "]";
	}

}
