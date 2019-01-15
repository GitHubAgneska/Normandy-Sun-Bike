package com.normandysunbike.normandysunbike.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.normandysunbike.normandysunbike.entities.EmailUser;
import com.normandysunbike.normandysunbike.service.EmailService;

@CrossOrigin( origins="*")
@RestController
public class EmailSenderController {
	
	@Autowired
	private EmailService service;
	
	
	@PostMapping("/Contact")
	public boolean sendEmailTo( @RequestBody EmailUser p_user ) {
		
		try {
			service.sendEmail(p_user);
			return true;
		}
		catch( Exception e) {
			System.out.println(e.getMessage());
			return false;
		}
	}
	

}



