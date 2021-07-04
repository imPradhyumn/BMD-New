package com.cg.bmd.testcases;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.bmd.dto.DoctorDTO;
import com.cg.bmd.exception.DoctorException;
import com.cg.bmd.repository.IDoctorRepository;
import com.cg.bmd.service.IDoctorService;

@SpringBootTest
public class DoctorTest {

	@Autowired
	IDoctorService service;

	@MockBean
	IDoctorRepository repo;

	// to create object for test
	private DoctorDTO getDoctorDto() {
		DoctorDTO doctorDto = new DoctorDTO();
		doctorDto.setDoctorId(73);
		doctorDto.setChargePerVisit(200);
		doctorDto.setDoctorName("Pradhyumn");
		doctorDto.setEmail("ps789@gmail.com");
		doctorDto.setHospitalName("Apollo hospital");
		doctorDto.setLocation("Nagpur");
		doctorDto.setDoctorPhone("9087672243");
		doctorDto.setPassword("dt5Fg");
		doctorDto.setSpeciality("Surgeon");
		return doctorDto;
	}

	@Test
	public void addDoctorTest() throws DoctorException {
		DoctorDTO doctorDto = getDoctorDto();
		doctorDto = service.addDoctor(doctorDto);
		assertTrue(doctorDto != null);
	}

	@Test
	public void getDoctorByIdTest() throws DoctorException {
		DoctorDTO doctorDto = service.getDoctorById(3);
		assertTrue(doctorDto != null);
	}

	@Test
	public void getDoctorListTest() throws DoctorException {
		List<DoctorDTO> doctorDto = null;
		doctorDto = service.getDoctorList();
		assertTrue(doctorDto != null);
	}

	@Test
	public void getDoctorListBySpecialityTest() throws DoctorException {
		List<DoctorDTO> doctorDto;
		doctorDto = service.getDoctorBySpeciality("ent");
		assertTrue(doctorDto.size() != 0);
	}

	@Test
	public void removeDoctorByIdTest() {
		assertNotNull(repo.findFirstRow().getEmail());
	}

}
