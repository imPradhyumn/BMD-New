package com.cg.bmd.entities;

import java.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="appointments")

public class Appointment {
	
	/*
	 *
	 * @Author : Pradhyumn Sharma
	 * Description : Appointment entity added
	 * Created : 06-06-2021
	 * Last Modified : --------
	 *
	 */

	//attributes

	@Id @GeneratedValue(generator = "app_seq", strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = "app_seq", sequenceName = "appointment_sequence",allocationSize=1)
	@NotNull(message="Appointment Id cannot be null")
	private int appointmentId;
	
	private LocalDate appointmentDate;
	
	@OneToOne
	@JoinColumn(name="doctor_id" )
	private Doctor doctor;

	@OneToOne
	@JoinColumn(name="patient_id" )
	private Patient patient;
	
	@NotEmpty(message="Status cannot be empty")
	private String status="Pending";

	private String remark;

	//constructors, getters and setters

	public Appointment() {}

	public Appointment(int appointmentId, LocalDate appointmentDate, Doctor doctor, Patient patient, String status, String remark) {
		super();
		this.appointmentId = appointmentId;
		this.appointmentDate = appointmentDate;
		this.doctor = doctor;
		this.patient = patient;
		this.status = status;
		this.remark = remark;
	}

	public Appointment(LocalDate appointmentDate, Patient patient, String status, String remark) {
		this.appointmentDate = appointmentDate;
		this.patient = patient;
		this.status = status;
		this.remark = remark;
	}

	public Appointment( LocalDate appointmentDate, Doctor doctor, Patient patient, String status, String remark) {
		super();
		this.appointmentDate = appointmentDate;
		this.doctor = doctor;
		this.patient = patient;
		this.status = status;
		this.remark = remark;
	}

	public int getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

}
