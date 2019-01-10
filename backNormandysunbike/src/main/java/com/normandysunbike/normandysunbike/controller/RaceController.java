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

import com.normandysunbike.normandysunbike.entities.Race;
import com.normandysunbike.normandysunbike.repository.RaceRepository;

@CrossOrigin( origins="*")
@RestController
public class RaceController {
	
	@Autowired
	private RaceRepository raceRepo;

	@GetMapping("/races")
	public List<Race> index() {
	    return raceRepo.findAll();
	}
	
	@GetMapping("/races/{id}")
	public Race getById(@PathVariable("id") Long id) throws Exception{
		try {
			return raceRepo.findById(id).get();
		} catch( Exception p_exception ) {
			throw new ResponseStatusException( 
					HttpStatus.NOT_FOUND, 
			        "no race found for id: " + id
		    		);
		}
		
	}
	
	@PutMapping("/races/{id}")
    public Race update(@PathVariable("id") Long id, @RequestBody Race race) throws Exception{
        
		Race current = raceRepo.findById(id).get();
		
		try {
	    	if( race.getContent() != null ) {
	    		current.setContent(race.getContent());
	    	}
	    	
	    	return raceRepo.save(current);
    	}
		catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no race found for id: " + id
    		);
    	}
    }
}
