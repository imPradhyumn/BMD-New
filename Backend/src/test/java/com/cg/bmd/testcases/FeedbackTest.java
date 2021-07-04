/*
 * package com.cg.bmd.testcases;
 * 
 * import static org.junit.Assert.assertTrue; import static
 * org.junit.jupiter.api.Assertions.assertEquals;
 * 
 * import java.util.List;
 * 
 * import org.junit.jupiter.api.Test; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.boot.test.context.SpringBootTest;
 * 
 * import com.cg.bmd.dto.DoctorDTO; import com.cg.bmd.dto.FeedbackDTO; import
 * com.cg.bmd.dto.PatientDTO; import com.cg.bmd.exception.FeedbackException;
 * import com.cg.bmd.repository.IDoctorRepository; import
 * com.cg.bmd.repository.IFeedbackRepository; import
 * com.cg.bmd.repository.IPatientRepository; import
 * com.cg.bmd.service.IFeedbackService;
 * 
 * @SpringBootTest public class FeedbackTest {
 * 
 * @Autowired IFeedbackService service;
 * 
 * @Autowired IFeedbackRepository repo;
 * 
 * @Autowired static IDoctorRepository doctorRepo;
 * 
 * @Autowired static IPatientRepository patientRepo;
 * 
 * private static FeedbackDTO getFeedbackDto() { FeedbackDTO feedbackDto = new
 * FeedbackDTO(); feedbackDto.setFeedback("Good"); feedbackDto.setRating(4);
 * feedbackDto.setDoctorDto(getDoctorDto());
 * feedbackDto.setPatientDto(getPatientDto()); return feedbackDto; }
 * 
 * private static PatientDTO getPatientDto() { PatientDTO patientDto = new
 * PatientDTO();
 * patientDto.setPatientId(patientRepo.findFirstRow().getPatientId()); return
 * patientDto; }
 * 
 * private static DoctorDTO getDoctorDto() { DoctorDTO doctorDto = new
 * DoctorDTO(); doctorDto.setDoctorId(doctorRepo.findFirstRow().getDoctorId());
 * return doctorDto; }
 * 
 * @Test public void addFeedbackTest() throws FeedbackException { FeedbackDTO
 * feedbackDto = getFeedbackDto();
 * assertEquals(feedbackDto,service.addFeedback(feedbackDto)); }
 * 
 * @Test public void getFeedbacksByDoctorIdTest() throws FeedbackException {
 * List<FeedbackDTO> feedbackList; feedbackList =
 * service.getAllFeedbacksByDoctorId(doctorRepo.findFirstRow().getDoctorId());
 * assertTrue(feedbackList!=null); }
 * 
 * }
 */