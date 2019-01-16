package com.normandysunbike.normandysunbike.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "actualities")
public class Actuality {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private long position;
	
	public Actuality() {
		// TODO Auto-generated constructor stub
	}
	
	public Actuality(long position) {
		this.position = position;
	}

	public long getPosition() {
		return position;
	}

	public void setPosition(long position) {
		this.position = position;
	}

}
