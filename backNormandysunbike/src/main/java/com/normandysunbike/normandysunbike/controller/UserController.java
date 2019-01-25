package com.normandysunbike.normandysunbike.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.normandysunbike.normandysunbike.entities.User;
import com.normandysunbike.normandysunbike.repository.UserRepository;
import com.normandysunbike.normandysunbike.utils.Util;

@CrossOrigin( origins="*")
@RestController
public class UserController{

    @Autowired
    private UserRepository userRepo;

    
    @GetMapping( value="/users/{apikey}")
    public List<User> getAll( 
    		@PathVariable("apikey") String p_apikey, 
    		@RequestHeader("X-TOKEN") String p_token, 
    		HttpServletResponse p_response
    ){
    	
    	User asker = userRepo.findByApikey(p_apikey);
    	
    	String[] roles = {"SUPER_ADMIN"};
    	
    	if( Util.isValidToken(asker, p_token) && Util.hasRole(asker, roles)) {
    		
    		Util.refreshToken(asker, p_response);
    		
    		userRepo.saveAndFlush(asker);
    		
    		return userRepo.findAll();
    	} else {
    		throw new ResponseStatusException(
    				HttpStatus.UNAUTHORIZED, 
    				"bad role" 
    		);
    	}
    	   
    }

    @GetMapping("/users/{id}/{apikey}")
    public User getById(
    		@PathVariable("id") Long p_id, 
    		@RequestBody User p_user,
    		@PathVariable("apikey") String p_apikey, 
        	@RequestHeader("X-TOKEN") String p_token, 
        	HttpServletResponse p_response
    		
    ) throws Exception {
    	User asker = userRepo.findByApikey(p_apikey);

    	String[] roles = {"SUPER_ADMIN"};
    	
    	if( Util.isValidToken(asker, p_token) && 
    			( Util.hasRole(asker, roles) || Util.isConcernedUser(asker, p_id) ) 		
    	) { try {
        		Util.refreshToken(asker, p_response);
        		
        		userRepo.saveAndFlush(asker);
        		
    	    	return userRepo.findById(p_id).get();
    	    	
        	} catch( Exception p_exception ) {
        		throw new ResponseStatusException(
    	          HttpStatus.NOT_FOUND, 
    	          "no user found for id: " + p_id
        		);
        	}
    	} else {
    		throw new ResponseStatusException(
	          HttpStatus.UNAUTHORIZED, 
	          "bad role" 
    		);
    	}
    }
    
    @PutMapping("/users/{id}/{apikey}")
    public User update(
    		@PathVariable("id") Long p_id, 
    		@RequestBody User p_user,
    		@PathVariable("apikey") String p_apikey, 
        	@RequestHeader("X-TOKEN") String p_token, 
        	HttpServletResponse p_response
    		
    ) throws Exception {
    	User asker = userRepo.findByApikey(p_apikey);
    	String[] roles = {"SUPER_ADMIN"};

    	if( Util.isValidToken(asker, p_token) && 
    		( Util.hasRole(asker, roles) || Util.isConcernedUser(asker, p_id)) 
    	) { try {
    			User current = userRepo.findById(p_id).get();

    	    	if( p_user.getEmail() != null ) {
    	    		current.setEmail(p_user.getEmail());
    	    	}

				if( p_user.getPassword() != null ) {
    	    		current.setPassword(p_user.getPassword());
    	    	}
				
    	    	if( p_user.getRole() != null && Util.hasRole(asker, roles) ) {
    	    		current.setRole(p_user.getRole());
    	    	}
    	    	
        		Util.refreshToken(asker, p_response);
        		
        		userRepo.saveAndFlush(asker);
        		
        		return userRepo.save(current);
        	}
        	catch( Exception p_exception ) {
        		throw new ResponseStatusException(
    	          HttpStatus.NOT_FOUND, 
    	          "no user found for id: " + p_id
        		);
        	}
    	} else {
    		throw new ResponseStatusException(
	          HttpStatus.UNAUTHORIZED, 
	          "bad role" 
    		);
    	}
    }
    
//    @PostMapping("/users/{apikey}")
//    public User create(
//    		@RequestBody User p_user, 
//    		@PathVariable("apikey") String p_apikey, 
//        	@RequestHeader("X-TOKEN") String p_token, 
//        	HttpServletResponse p_response
//    ) throws Exception {
//    	User asker = userRepo.findByApikey(p_apikey);
//    	String[] roles = {"SUPER_ADMIN"};
//    	
//    	if( Util.isValidToken(asker, p_token) && Util.hasRole(asker, roles)) {
//    		
//    		Util.refreshToken(asker, p_response);
//    		userRepo.saveAndFlush(asker);
//    		p_user.setApikey(Util.genApikey());
//    		return userRepo.save(p_user);
//    	}
//    	else { 
//    		throw new ResponseStatusException(
//	          HttpStatus.UNAUTHORIZED, 
//	          "bad role" 
//			);
//    	}
//	
//    }
    
}
