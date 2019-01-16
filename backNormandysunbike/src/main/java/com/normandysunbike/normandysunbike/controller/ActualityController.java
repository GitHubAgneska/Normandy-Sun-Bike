package com.normandysunbike.normandysunbike.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

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
	
	@PutMapping("/actuality/{id}")
    public Actuality update(@PathVariable int id, @RequestBody Actuality p_actuality){

        try {
        	Actuality actualityToUpdate = actualityRepo.findById((long) id).get();
        	
	    	if( p_actuality.getPosition() != 0L ) {
	    		actualityToUpdate.setPosition(p_actuality.getPosition());
	    	}
	    	
	    	return actualityRepo.save(actualityToUpdate);
    	}
		catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no actuality found for id: " + id
    		);
    	}
    }
}
