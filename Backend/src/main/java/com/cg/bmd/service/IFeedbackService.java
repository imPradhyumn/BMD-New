package com.cg.bmd.service;

import java.util.List;

import com.cg.bmd.entities.*;
import com.cg.bmd.exception.FeedbackException;

public interface IFeedbackService {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Service interface for Feedback added
	 * Created : 08-06-2021 Last Modified : ------
	 *
	 */

	Feedback addFeedback(Feedback feedback) throws FeedbackException;

	Feedback getFeedbackById(int feedbackId) throws FeedbackException;

	List<Feedback> getAllFeedbacksByDoctorId(int doctorId) throws FeedbackException;

}
