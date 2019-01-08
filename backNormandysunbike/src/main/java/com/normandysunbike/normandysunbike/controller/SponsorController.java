package com.normandysunbike.normandysunbike.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.normandysunbike.normandysunbike.repository.SponsorRepository;

@RestController
public class SponsorController {
	
	@Autowired
	SponsorRepository SponsorRepo;


}
