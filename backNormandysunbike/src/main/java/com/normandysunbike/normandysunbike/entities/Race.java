package com.normandysunbike.normandysunbike.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "actualities")
public class Race {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String content;
	
	
	public Race() {
		// TODO Auto-generated constructor stub
	}
	
	public Race(String name, String content) {
		this.name = name;
		this.content = content;
	}
	
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}
