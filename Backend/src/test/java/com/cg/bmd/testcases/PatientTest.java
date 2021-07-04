/*
 * package com.cg.bmd.testcases;
 * 
 * import static org.junit.jupiter.api.Assertions.*;
 * 
 * import java.util.List;
 * 
 * import org.junit.After; import org.junit.Before; import
 * org.junit.jupiter.api.AfterAll; import org.junit.jupiter.api.BeforeEach;
 * import org.junit.jupiter.api.Test; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.boot.test.context.SpringBootTest; import
 * org.springframework.boot.test.mock.mockito.MockBean;
 * 
 * import com.cg.bmd.dto.PatientDTO; import
 * com.cg.bmd.exception.PatientException; import
 * com.cg.bmd.repository.IPatientRepository; import
 * com.cg.bmd.repository.IUserRepository; import
 * com.cg.bmd.service.IPatientService;
 * 
 * @SpringBootTest
 * 
 * public class PatientTest {
 * 
 * @Autowired IPatientService service;
 * 
 * @Autowired IPatientRepository repo;
 * 
 * @AfterAll static void tearDownAfterClass() throws Exception {}
 * 
 * private PatientDTO getPatientDto() { PatientDTO patientDto = new
 * PatientDTO(); patientDto.setPatientId(10); patientDto.setPatientName("Ron");
 * patientDto.setPassword("pa98098080");
 * patientDto.setPatientPhone("9053875937"); patientDto.setGender("male");
 * patientDto.setEmail("ron@gmail.com"); patientDto.setAge(10);
 * patientDto.setAddress("6e13 hjk bhilwara"); return patientDto; }
 * 
 * @BeforeEach public void addPatientTest() throws PatientException { PatientDTO
 * patientDto = getPatientDto(); patientDto=service.addPatient(patientDto);
 * assertTrue(patientDto!=null); }
 * 
 * @Test public void getPatientByIdTest() throws PatientException { PatientDTO
 * patientDto = getPatientDto();
 * patientDto=service.getPatientById(repo.findFirstRow().getPatientId());
 * assertTrue(patientDto!=null); }
 * 
 * @Test public void getPatientListTest() throws PatientException {
 * List<PatientDTO> patientDto=null; patientDto=service.getAllPatients();
 * assertTrue(patientDto!=null); }
 * 
 * @Test public void getPatientListByDoctorIdTest() throws PatientException {
 * List<PatientDTO> patientDto=null;
 * patientDto=service.getPatientListByDoctor(5); assertTrue(patientDto!=null); }
 * 
 * @Test public void removePatientByIdTest() {
 * assertEquals("Deleted",service.removePatientById(repo.findFirstRow().
 * getPatientId())); }
 * 
 * }
 */