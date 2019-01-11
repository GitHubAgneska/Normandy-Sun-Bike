package com.normandysunbike.normandysunbike.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.normandysunbike.normandysunbike.repository.UserRepository;
import com.normandysunbike.normandysunbike.entities.User;

@CrossOrigin( origins="*")
@RestController
public class UserController{

    @Autowired
    private UserRepository userRepo;

    
    @GetMapping( value="/users/all/{apikey}")
    public List<User> getAll( @PathVariable("apikey") String p_apikey ) throws Exception{
    	    	
    	return userRepo.findAll();
    }

}
