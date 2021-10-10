package com.cristina.Shopping.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cristina.Shopping.entity.dao.IShoppingDao;
import com.cristina.Shopping.entity.models.Shopping;

@Service
public class ShoppingServiceslmpl implements IShoppingService {
	@Autowired
	private IShoppingDao ShoppingDao;
		
	@Override
	public Shopping get(long id) {
		return ShoppingDao.findById(id).get();
	}

	@Override
	public List<Shopping> getAll() {
		return (List<Shopping>) ShoppingDao.findAll();
	}

	@Override
	public void post(Shopping products) {
		ShoppingDao.save(products);
		
	}

	@Override
	public void put(Shopping products, long id) {
		ShoppingDao.findById(id).ifPresent((x)->{
			products.setId(id);
			ShoppingDao.save(products);
		});	
		
	}

	@Override
	public void delete(long id) {
		ShoppingDao.deleteById(id);
		
	}
	
}
