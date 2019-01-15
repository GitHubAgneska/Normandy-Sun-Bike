package com.normandysunbike.normandysunbike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.normandysunbike.normandysunbike.entities.Actuality;

@Repository
public interface ActualityRepository extends JpaRepository<Actuality, Long>{

}
