package com.normandysunbike.normandysunbike.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.normandysunbike.normandysunbike.entities.EmailUser;

@Service
public class EmailService {
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public EmailService(JavaMailSender javaMailSender ) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendEmail(EmailUser emailUser) throws MailException {
		
		SimpleMailMessage mail = new SimpleMailMessage();
		
		mail.setTo("normandysunbike@gmail.com");                   // (emailUser.getEmailAddress()); 
		mail.setSubject("Nouvel email depuis le site");
	    mail.setFrom("normandysunbike@gmail.com");
		mail.setText(emailUser.getMsg() +  "\n" + "Envoyé par : " + emailUser.getEmailAddress());
		
		
		javaMailSender.send(mail);
		
	}
	
}

