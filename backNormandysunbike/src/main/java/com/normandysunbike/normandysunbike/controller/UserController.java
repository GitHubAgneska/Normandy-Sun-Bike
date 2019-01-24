package com.normandysunbike.normandysunbike.controller;

import java.util.List;

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

import com.normandysunbike.normandysunbike.entities.User;
import com.normandysunbike.normandysunbike.repository.UserRepository;
import com.normandysunbike.normandysunbike.utils.Util;

@CrossOrigin( origins="*")
@RestController
public class UserController{

    @Autowired
    private UserRepository userRepo;

    
    @GetMapping( value="/users/all/{apikey}")
    public List<User> getAll( @PathVariable("apikey") String p_apikey ) throws Exception{
    	
    	User asker = userRepo.findByApikey(p_apikey);
    	
    	if (asker != null && asker.getRole().equals("SUPER_ADMIN")) {
    		return userRepo.findAll();
    	} else {
    		throw new ResponseStatusException(
    				HttpStatus.METHOD_NOT_ALLOWED,
    				"bad role");
    	}
    	   
    }
    
    
    @GetMapping( value="/users/{id}")
    public User getById( @PathVariable("id") Long p_id ) throws Exception {
    	
    	try {
    		return userRepo.findById(p_id).get();
    	}
    	catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no user found for id: " + p_id
    		);
    	}
    }
    
    
    @PostMapping("/users")
    public User create(@RequestBody User p_user) {
    	
    	// mot de passe que l'utilisateur nous a envoyé
    	// on va le crypter
    	String currentMdp = p_user.getPassword();
    	String apikey = Util.genApikey();
    	
    	p_user.setPassword( Util.genPasswd(currentMdp) );
    	p_user.setApikey(apikey);
    	return userRepo.save(p_user);
    }
    
    
    
    
    @PutMapping("/users/{id}")
    public User update(
    		@PathVariable("id") Long p_id, 
    		@RequestBody User p_user
    ) throws Exception 
    {
    	
    	try {
	    	return userRepo.save(p_user);
    	}
    	catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no user found for id: " + p_id
    		);
    	}
    }
    
    
    
    @DeleteMapping("/users/{id}")
    public boolean delete(@PathVariable("id") Long p_id) throws Exception {
    	
    	try {
    		userRepo.deleteById(p_id);
        	return true;
    	}
    	catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no user found for id: " + p_id
    		);
    	}
     	
    }

    
}
