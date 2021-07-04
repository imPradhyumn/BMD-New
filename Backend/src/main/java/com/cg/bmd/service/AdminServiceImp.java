// package com.cg.bmd.service;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.cg.bmd.dto.AdminDTO;
// import com.cg.bmd.entities.Admin;
// import com.cg.bmd.exception.AdminException;
// import com.cg.bmd.repository.IAdminRepository;

// @Service
// public class AdminServiceImp implements IAdminService {

// /*
// *
// * @Author : Sanjay Kumar Description : Admin service implementation added
// * Created : 07-06-2021 Last Modified : 08-06-2021 Parameters :
// * AdminDTO/adminId/String Return types : AdminDTO/String/
// *
// */

// Logger logger = LoggerFactory.getLogger(IAdminService.class);

// @Autowired
// IAdminRepository adminRepo;

// @Override
// public AdminDTO addAdmin(AdminDTO adminDto) throws AdminException {
// boolean validPhone =
// ValidationService.validatePhone(adminDto.getAdminPhone());
// boolean validEmail = ValidationService.validateEmail(adminDto.getEmail());
// boolean validName = ValidationService.validateName(adminDto.getAdminName());

// if (validPhone && validName && validEmail) {
// Admin admin = Util.AdminDtoToEntity(adminDto);
// logger.info("Patient added successfully");
// return Util.AdminEntityToDto(adminRepo.save(admin));
// }

// if (validPhone == false)
// logger.error("Please enter valid phone number");

// if (validEmail == false)
// logger.error("Please enter valid email");

// if (validName == false)
// logger.error("Please enter valid name");

// throw new AdminException("Patient not added");
// }

// @Override
// public void removeAdminById(int adminId) throws AdminException {
// if (!adminRepo.existsById(adminId)) {
// logger.error("Admin with given id not found");
// throw new AdminException("Admin with given id not found");
// }
// adminRepo.deleteById(adminId);
// }

// @Override
// public AdminDTO updateAdmin(AdminDTO adminDto) throws AdminException {
// Admin admin = Util.AdminDtoToEntity(adminDto);
// if (!adminRepo.existsById(adminDto.getAdminId())) {
// logger.error("Admin with given id not found");
// throw new AdminException("Admin with given id not found");
// }
// return Util.AdminEntityToDto(adminRepo.save(admin));
// }

// @Override
// public AdminDTO getAdminById(int adminId) throws AdminException {
// if (!adminRepo.existsById(adminId)) {
// logger.error("Admin with given id not found");
// throw new AdminException("Admin with given id not found");
// }
// return Util.AdminEntityToDto(adminRepo.getById(adminId));
// }

// @Override
// public String login(String email, String password) throws AdminException {
// String result = adminRepo.findPasswordByEmail(email);
// if (!result.equals(password)) {
// logger.error("Login failed!! Wrong credentials");
// throw new AdminException("Login failed!! Wrong credentials");
// }
// return "Logged In";
// }

// }
