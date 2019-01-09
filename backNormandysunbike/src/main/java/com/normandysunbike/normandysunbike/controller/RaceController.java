package com.normandysunbike.normandysunbike.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
	public Race show(@PathVariable Long id) {
		return raceRepo.findById(id).get();
	}
	
	@PutMapping("/races/{id}")
    public Race update(@PathVariable Long id, @RequestBody Race race){
        Race raceToUpdate = raceRepo.findById(id).get();
        raceToUpdate.setContent(race.getContent());
        return raceRepo.save(raceToUpdate);
    }
}
