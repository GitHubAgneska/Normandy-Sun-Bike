package com.normandysunbike.normandysunbike.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.normandysunbike.normandysunbike.repository.RaceRepository;

@CrossOrigin( origins="*")
@RestController
public class RaceController {
	
	@Autowired
	RaceRepository raceRepo;


}
