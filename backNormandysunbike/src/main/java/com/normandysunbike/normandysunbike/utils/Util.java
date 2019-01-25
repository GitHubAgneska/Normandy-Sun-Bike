package com.normandysunbike.normandysunbike.utils;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.normandysunbike.normandysunbike.entities.User;

public class Util {
	
	public Util() {
		// TODO Auto-generated constructor stub
	}
	
	static public boolean isValidToken( User p_user, String p_token) {
		return p_user.getToken().equals(p_token);
	}
	
	static public boolean hasRole( User p_user, String[] p_roles) {
		List<String> roles = Arrays.asList(p_roles);
		return roles.contains( p_user.getRole());
	}
	
	static public boolean isConcernedUser( User p_user, Long p_concernedUserId ) {
		return p_user.getId() == p_concernedUserId;
	}

	static public void refreshToken( User p_user, HttpServletResponse p_response ) {
		p_user.setToken(Util.genNewToken());
		p_response.setHeader("X-TOKEN", p_user.getToken() );
		p_response.setHeader("Access-Control-Expose-Headers", "X-TOKEN");
		p_response.setHeader("Access-Control-Allow-Headers", "X-TOKEN");
	}
	
	
	
	static public String crypt( String p_str ) {
		 MessageDigest md;
		try {
			md = MessageDigest.getInstance("SHA-256");
			md.update( p_str.getBytes() );
			byte[] data = md.digest();
			
			StringBuffer buff = new StringBuffer();
			for (byte bytes : data) {
				buff.append(String.format("%02x", bytes & 0xff));
			}
			
			return buff.toString();

		} catch (NoSuchAlgorithmException e) {
			return "no_crypt";
		}
		 
	}
	
	static public String genApikey() {
		return Util.crypt("solarEnergy_" + Math.random() );
	}
	
	static public String genNewToken() {
		long timestamp = System.currentTimeMillis();
		String str = "calvados_" + timestamp;
		return Util.crypt( str );
	}
	
	static public String genPasswd( String p_str ) {
		return Util.crypt( "andouille_de_vire_" + p_str );
	}

}
