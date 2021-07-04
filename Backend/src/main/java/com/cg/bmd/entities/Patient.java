package com.cg.bmd.entities;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "patients")
public class Patient {

	/*
	 *
	 * @Author : Shireesha Uppari Description : Add Entity Class to create Patient
	 * Created : 05-06-2021 Last modified : -------
	 *
	 */

	@Id
	@GeneratedValue(generator = "patient_seq", strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = "patient_seq", sequenceName = "patient_sequence", allocationSize = 1)
	private int patientId;

	@NotEmpty(message = "Patient name cannot be empty")
	private String patientName;

	@NotEmpty(message = "Patient phone cannot be empty")
	@Column(unique = true)
	private String patientPhone;

	@NotEmpty(message = "Address field can't be empty")
	private String address;

	@NotEmpty(message = "Gender cannot be empty")
	private String gender;

	@NotNull(message = "Age can't be null")
	@Min(1)
	@Max(100)
	private int age;

	@NotEmpty(message = "Email can't be empty")
	@Column(unique = true)
	private String email; // credentials for login

	@NotEmpty(message = "Password can't be empty")
	private String password;

	@OneToMany(mappedBy = "patient")
	@JsonIgnore
	List<Appointment> appointment;

	@OneToOne(mappedBy = "patient")
	Feedback feedback;

	// constructors, getters and setters

	public Patient() {
	}

	public Patient(int patientId, String patientName, String patientPhone, String address, String gender, int age,
			String email, String password) {
		super();
		this.patientId = patientId;
		this.patientName = patientName;
		this.patientPhone = patientPhone;
		this.address = address;
		this.gender = gender;
		this.age = age;
		this.email = email;
		this.password = password;
	}

	public Patient(String patientName, String patientPhone, String address, String gender, int age, String email,
			String password) {
		super();
		this.patientName = patientName;
		this.patientPhone = patientPhone;
		this.address = address;
		this.gender = gender;
		this.age = age;
		this.email = email;
		this.password = password;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getPatientPhone() {
		return patientPhone;
	}

	public void setPatientPhone(String patientPhone) {
		this.patientPhone = patientPhone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Appointment> getAppointment() {
		return appointment;
	}

	public void setAppointment(List<Appointment> appointment) {
		this.appointment = appointment;
	}

}
