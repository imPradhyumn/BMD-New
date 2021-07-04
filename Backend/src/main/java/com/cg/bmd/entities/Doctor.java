package com.cg.bmd.entities;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "doctors")
public class Doctor {

	/*
	 *
	 * @Author1 : Shivam Singh
	 * 
	 * @Author2 : Pradhyumn Sharma Description : Entity Doctor added Created :
	 * 05-06-2021 Last Modified : 06-06-2021
	 *
	 */

	// attributes
	@Id
	@GeneratedValue(generator = "doctor_seq", strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = "doctor_seq", sequenceName = "doctor_sequence", allocationSize = 1)
	private int doctorId;

	@NotEmpty(message = "Doctor name must not be empty")
	private String doctorName;

	@NotNull(message = "Mobile number cannot be null")
	@Size(min = 10, max = 13)
	@Column(unique = true)
	private String doctorPhone;

	@NotNull(message = "Charge per Visit cannot be null")
	@Positive(message = "chargePerVisit must be positive value")
	private int chargePerVisit;

	@NotEmpty(message = "Hospital Name cannot be empty")
	private String hospitalName;

	@NotNull(message = "Speciality cannot be empty")
	private String speciality;

	// @NotEmpty(message = "Location is required")
	String location;

	// credentials for login
	@NotEmpty(message = "Email is required")
	@Column(unique = true)
	private String email;

	@NotEmpty(message = "Password is required")
	private String password;

	@OnDelete(action = OnDeleteAction.CASCADE)
	@OneToMany(mappedBy = "doctor", cascade = CascadeType.REMOVE) // if doctor deleted then appointment also deleted
	List<Appointment> appointmentList;

	// @OnDelete(action = OnDeleteAction.CASCADE)
	// @OneToOne(mappedBy = "doctor", cascade = CascadeType.PERSIST) // if doctor
	// deleted then availability dates also
	// deleted
	// @JsonIgnore
	// AvailabilityDate availabilityDate;

	String availabilityDays;

	@OnDelete(action = OnDeleteAction.CASCADE)
	@OneToMany(mappedBy = "doctor", cascade = CascadeType.REMOVE)
	@JsonIgnore
	List<Feedback> feedback;

	public Doctor() {
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getAvailabilityDays() {
		return this.availabilityDays;
	}

	public void setAvailabilityDays(String availabilityDays) {
		this.availabilityDays = availabilityDays;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getDoctorPhone() {
		return doctorPhone;
	}

	public void setDoctorPhone(String doctorPhone) {
		this.doctorPhone = doctorPhone;
	}

	public int getChargePerVisit() {
		return chargePerVisit;
	}

	public void setChargePerVisit(int chargePerVisit) {
		this.chargePerVisit = chargePerVisit;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
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

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", doctorPhone=" + doctorPhone + ", chargePerVisit=" + chargePerVisit
				+ ", hospitalName=" + hospitalName + "]";
	}

}
