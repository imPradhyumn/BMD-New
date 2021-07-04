package com.cg.bmd.entities;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "feedbacks")
public class Feedback {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Entity Feedback added Created :
	 * 08-06-2021 Last Modified : -------
	 *
	 */

	@Id
	@GeneratedValue(generator = "feedback_seq", strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = "feedback_seq", sequenceName = "feedback_sequence", allocationSize = 1)
	private int feedbackId;

	private int rating;

	@NotEmpty(message = "Feedback can't be empty")
	private String feedback;

	@ManyToOne
	@JoinColumn(name = "doctor_id")
	private Doctor doctor;

	@ManyToOne
	@JoinColumn(name = "patient_id")
	private Patient patient;

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
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

}
