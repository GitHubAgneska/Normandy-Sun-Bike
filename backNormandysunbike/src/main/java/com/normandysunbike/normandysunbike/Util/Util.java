package com.normandysunbike.normandysunbike.Util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Util {

	public Util() {
		// TODO Auto-generated constructor stub
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
		return Util.crypt("tartiflette_" + Math.random() );
	}
	
	static public String genPasswd( String p_str ) {
		return Util.crypt( "jambon_" + p_str );
	}

}
