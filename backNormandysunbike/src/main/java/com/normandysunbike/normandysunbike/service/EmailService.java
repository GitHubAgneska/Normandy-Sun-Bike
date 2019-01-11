package com.normandysunbike.normandysunbike.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.normandysunbike.normandysunbike.entities.User;

@Service
public class EmailService {
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public EmailService(JavaMailSender javaMailSender ) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendEmail(User user) throws MailException {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(user.getEmailAddress());
	//  mail.setFrom("");
		mail.setSubject("Our first awesome SUnbike email");
		mail.setText("This is such a great first email that it's hard to describe");
		
	
		javaMailSender.send(mail);
		
	}
	
}

