package com.normandysunbike.normandysunbike.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.normandysunbike.normandysunbike.repository.RaceRepository;

@RestController
public class RaceController {
	
	@Autowired
	RaceRepository raceRepo;


}
