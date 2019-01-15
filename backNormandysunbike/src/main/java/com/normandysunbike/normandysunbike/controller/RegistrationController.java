package com.normandysunbike.normandysunbike.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

	
	@RequestMapping("/signup")
	public String signup() {
		return "Please sign up";
	}
	
	@RequestMapping("/signupSuccess")
	public String signupSuccess() {
		
		return "Thank you for registrering";
	}
}
