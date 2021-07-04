package com.cg.bmd;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootTest
class BookMyDoctorApplicationTests {

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
