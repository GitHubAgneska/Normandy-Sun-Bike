package com.normandysunbike.normandysunbike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.normandysunbike.normandysunbike.entities.Sponsor;

@Repository
public interface SponsorRepository extends JpaRepository<Sponsor, Long>{

}
