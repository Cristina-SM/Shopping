package com.cristina.Shopping.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;




@Entity
@Table(name ="products")
public class Shopping implements Serializable {
	private static final long serialVersionUID = 1l;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	private int lot;
	
	private String image;
	
	
	
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getLot() {
		return lot;
	}


	public void setLot(int lot) {
		this.lot = lot;
	}

	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}
	public Shopping(long id, String name, int lot, String image) {
		super();
		this.id = id;
		this.name = name;
		this.lot = lot;
		this.setImage(image);
	}
	public Shopping() {
		
	}

}
