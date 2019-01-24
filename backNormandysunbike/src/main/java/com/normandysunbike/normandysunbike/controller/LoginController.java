package com.normandysunbike.normandysunbike.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.normandysunbike.normandysunbike.entities.User;
import com.normandysunbike.normandysunbike.repository.UserRepository;
import com.normandysunbike.normandysunbike.utils.Util;

@CrossOrigin(origins ="*")
@RestController
public class LoginController {
	
	@Autowired
	private UserRepository repo;
	
	
	
	@PostMapping("/admin")
	public User create(@RequestBody User p_user) throws Exception {
		User current = repo.findByEmailAndPassword (
				p_user.getEmail(),
				Util.genPasswd(p_user.getPassword())
		);
		
		if (current == null ) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"not a valid user"
					);
		}
		else {
			return current;
		}
		
		
	}

}
