package com.normandysunbike.normandysunbike.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.normandysunbike.normandysunbike.Util.Util;
import com.normandysunbike.normandysunbike.entities.User;
import com.normandysunbike.normandysunbike.repository.UserRepository;


@CrossOrigin( origins="*")
@RestController
public class AuthentificationController {

	
	@Autowired
	private UserRepository userRepo;
	
	@PostMapping("/auth")
	public User create(@RequestBody User p_user) throws Exception {
    	User current = userRepo.findByEmailAndPassword( 
    			p_user.getEmail(), 
    			Util.genPasswd( p_user.getPassword() )
    	);
    	
    	if( current == null ) {
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
