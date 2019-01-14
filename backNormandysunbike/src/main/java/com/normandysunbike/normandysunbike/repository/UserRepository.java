package com.normandysunbike.normandysunbike.repository;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmailAndPassword( String p_email, String p_password);
	public User findByApikey( String p_apikey );
	
}
