package com.cristina.Shopping.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.cristina.Shopping.entity.models.Shopping;




public interface IShoppingDao extends CrudRepository<Shopping, Long> {

}
