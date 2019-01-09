package com.normandysunbike.normandysunbike.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.normandysunbike.normandysunbike.entities.Actuality;
import com.normandysunbike.normandysunbike.repository.ActualityRepository;

@CrossOrigin( origins="*")
@RestController
public class ActualityController {

	@Autowired
	ActualityRepository actualityRepo;
	

	@GetMapping( value="/actuality")
    public List<Actuality> getAll(){
		
        return actualityRepo.findAll();
        
    }
	
	@PutMapping("/actuality")
	public Actuality updateActuality() {
		//@RequestBody Actuality p_question
		
		// Actuality actuality = actualityRepo.findById(id).get();
		return null;
	}
}
