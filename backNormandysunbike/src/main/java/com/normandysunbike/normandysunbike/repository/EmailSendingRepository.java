package com.normandysunbike.normandysunbike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.normandysunbike.normandysunbike.entities.EmailUser;

@Repository
public interface EmailSendingRepository extends JpaRepository <EmailUser, Integer>{
		
}
