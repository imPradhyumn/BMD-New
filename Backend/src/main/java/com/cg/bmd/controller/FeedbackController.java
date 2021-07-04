package com.cg.bmd.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cg.bmd.entities.Feedback;
import com.cg.bmd.exception.FeedbackException;
import com.cg.bmd.service.IFeedbackService;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("bmd/feedback")
public class FeedbackController {

	/*
	 *
	 * @Author : Pradhyumn Sharma Description : Controller for Feedback added
	 * Created : 08-06-2021 Last Modified : 09-06-2021 Parameters : Feedback Return
	 * type : Feedback
	 *
	 */

	@Autowired
	IFeedbackService service;

	Logger logger = LoggerFactory.getLogger(IFeedbackService.class);

	@CrossOrigin(origins = "*", maxAge = 3600)
	@PostMapping("/add")
	public Feedback addFeedback(@RequestBody Feedback feedback) throws FeedbackException {
		feedback = service.addFeedback(feedback);
		if (feedback != null) {
			logger.info("Feedback added");
			return feedback;
		}
		return null;
	}

	@GetMapping("get/feedbackbyid/{id}")
	public Feedback getFeedback(@PathVariable("id") int feedbackId) throws FeedbackException {
		return service.getFeedbackById(feedbackId);
	}

	@GetMapping("get/feedbacksbydoctorid/{id}")
	public List<Feedback> getFeedbacksByDoctor(@PathVariable("id") int doctorId) throws FeedbackException {
		return service.getAllFeedbacksByDoctorId(doctorId);
	}

}
