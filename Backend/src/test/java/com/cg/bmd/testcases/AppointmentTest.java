/*
 * package com.cg.bmd.testcases;
 * 
 * import static org.junit.Assert.assertTrue; import static
 * org.junit.jupiter.api.Assertions.assertEquals;
 * 
 * import java.time.LocalDate; import java.util.List;
 * 
 * import org.junit.jupiter.api.Test; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.boot.test.context.SpringBootTest;
 * 
 * import com.cg.bmd.dto.AppointmentDTO; import com.cg.bmd.dto.DoctorDTO; import
 * com.cg.bmd.dto.PatientDTO; import
 * com.cg.bmd.repository.IAppointmentRepository; import
 * com.cg.bmd.repository.IDoctorRepository; import
 * com.cg.bmd.repository.IPatientRepository; import
 * com.cg.bmd.service.IAppointmentService;
 * 
 * @SpringBootTest public class AppointmentTest {
 * 
 * @Autowired IAppointmentService service;
 * 
 * @Autowired IAppointmentRepository repo;
 * 
 * @Autowired IDoctorRepository doctorRepo;
 * 
 * @Autowired IPatientRepository patientRepo;
 * 
 * private AppointmentDTO getAppointmentDto() { AppointmentDTO appointment = new
 * AppointmentDTO(); appointment.setPatientDto(getPatientDto());
 * appointment.setAppointmentId(1);
 * appointment.setAppointmentDate(LocalDate.parse("2021-06-23"));
 * appointment.setStatus("Pending"); appointment.setDoctorDto(getDoctorDto());
 * appointment.setPatientDto(getPatientDto()); return appointment; }
 * 
 * private PatientDTO getPatientDto() { PatientDTO patientDto = new
 * PatientDTO();
 * patientDto.setPatientId(patientRepo.findFirstRow().getPatientId()); return
 * patientDto; }
 * 
 * private DoctorDTO getDoctorDto() { DoctorDTO doctorDto = new DoctorDTO();
 * doctorDto.setDoctorId(doctorRepo.findFirstRow().getDoctorId()); return
 * doctorDto; }
 * 
 * @Test void addAppointmentTest() { AppointmentDTO appointmentDto =
 * getAppointmentDto();
 * assertEquals(appointmentDto,service.addAppointment(appointmentDto)); }
 * 
 * @Test void getAllAppointmentsTest() { List<AppointmentDTO> appointmentList =
 * null; appointmentList = service.getAllAppointments();
 * assertTrue(appointmentList!=null); }
 * 
 * @Test void getAppointmentByIdTest() { AppointmentDTO appointmentDto =
 * service.getAppointmentById(repo.findFirstRow().getAppointmentId());
 * assertTrue(appointmentDto!=null); }
 * 
 * @Test void getAppointmentByDateTest() { List<AppointmentDTO>
 * appointmentDtoList = service.getAppointmentsByDate("2021-06-23");
 * assertTrue(appointmentDtoList.size()!=0); }
 * 
 * @Test void removeAppointmentById() { Appointment appointment =
 * getAppointment(); verify(repo,
 * times(1)).deleteById(appointment.getAppointmentId()); }
 * 
 * }
 */