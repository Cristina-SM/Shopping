package com.cristina.Shopping.entity.services;

import java.util.List;

import com.cristina.Shopping.entity.models.Shopping;

public interface IShoppingService {
	public Shopping get(long id);
	public List<Shopping> getAll();
	public void post(Shopping products);
	public void put(Shopping products, long id);
	public void delete(long id);
	
}
