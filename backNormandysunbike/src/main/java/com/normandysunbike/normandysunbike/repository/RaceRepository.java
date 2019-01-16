package com.normandysunbike.normandysunbike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.normandysunbike.normandysunbike.entities.Race;

@Repository
public interface RaceRepository extends JpaRepository<Race, Long>{

}
