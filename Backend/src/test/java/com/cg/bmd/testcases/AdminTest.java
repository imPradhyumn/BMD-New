package com.cg.bmd.testcases;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.bmd.dto.AdminDTO;
import com.cg.bmd.exception.AdminException;
import com.cg.bmd.repository.IAdminRepository;
import com.cg.bmd.service.IAdminService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class AdminTest {

	@Autowired
	IAdminService service;

	@Autowired
	IAdminRepository repo;

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	private AdminDTO getAdminDto() {
		AdminDTO adminDto = new AdminDTO();
		adminDto.setAdminId(20);
		adminDto.setAdminName("Pradhyumn");
		adminDto.setAdminPhone("9950783536");
		adminDto.setEmail("ps2020@gmail.com");
		adminDto.setPassword("abcbc@123");
		return adminDto;
	}

	@BeforeEach
	@Test
	public void addAdminTest() throws AdminException {
		AdminDTO adminDto = getAdminDto();
		adminDto = service.addAdmin(adminDto);
		assertTrue(adminDto != null);
	}

	@Test
	public void getAdminByIdTest() throws AdminException {
		AdminDTO adminDto = service.getAdminById(repo.findFirstRow().getAdminId());
		assertTrue(adminDto != null);
	}

}
