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

import com.normandysunbike.normandysunbike.entities.Sponsor;
import com.normandysunbike.normandysunbike.repository.SponsorRepository;

@CrossOrigin( origins="*")
@RestController
public class SponsorController {
	
	@Autowired
	SponsorRepository SponsorRepo;

	
	@GetMapping("/sponsors")
    public List<Sponsor> index(){
        return SponsorRepo.findAll();
    }
	
	@GetMapping("/sponsors/{id}")
    public Sponsor show(@PathVariable int p_id){
		try {
			return SponsorRepo.findById((long) p_id).get();
    	}
    	catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no question found for id: " + p_id
    		);
    	}
        
    }
	
	@PostMapping("/sponsors")
    public Sponsor create(@RequestBody Sponsor p_sponsor){
        return SponsorRepo.save(p_sponsor);
    }
	
    @PutMapping("/sponsors/{id}")
    public Sponsor update(
    		@PathVariable("id") Long p_id, 
    		@RequestBody Sponsor p_sponsor
    ) throws Exception 
    {
    	
    	try {
    		Sponsor current = SponsorRepo.findById(p_id).get();
	    	if( p_sponsor.getName() != null ) {
	    		current.setName(p_sponsor.getName());
	    	}
	    	
	    	if( p_sponsor.getImg() != null ) {
	    		current.setImg(p_sponsor.getImg());
	    	}
	    	
	    	if( p_sponsor.getLink() != null ) {
	    		current.setLink(p_sponsor.getLink());
	    	}
	    	
	    	if( p_sponsor.getLevel() != null ) {
	    		current.setLevel(p_sponsor.getLevel());
	    	}
	    	
	    	if( p_sponsor.getDescription() != null ) {
	    		current.setDescription(p_sponsor.getDescription());
	    	}
	    	
	    	return SponsorRepo.save(current);
    	}
    	catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no sponsor found for id: " + p_id
    		);
    	}
    }
    
    @DeleteMapping("sponsors/{id}")
    public boolean delete(@PathVariable int p_id){
    	
    	try {
    		SponsorRepo.deleteById((long) p_id);
            return true;
    	}
    	catch( Exception p_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no sponsor found for id: " + p_id
    		);
    	}
    }
	
}
