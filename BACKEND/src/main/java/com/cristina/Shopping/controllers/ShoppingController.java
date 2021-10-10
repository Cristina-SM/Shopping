package com.cristina.Shopping.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cristina.Shopping.entity.models.Shopping;
import com.cristina.Shopping.entity.services.IShoppingService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class ShoppingController {
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
            }
        };
    }
	@Autowired
	IShoppingService ShoppingService;
	
	@GetMapping("/products")
	public List<Shopping> getAllShopping(){
		return ShoppingService.getAll();
	}
	
	@GetMapping("/products/{id}")
	public Shopping getOne(@PathVariable(value = "id")long id) {
		return ShoppingService.get(id);
	}
	
	@PostMapping("/products")
	public void add(Shopping products) {
		ShoppingService.post(products);
	}
	
	@PutMapping("/products/{id}")
	public void update(Shopping products, @PathVariable(value = "id")long id) {
		ShoppingService.put(products, id);
	}
	
	@DeleteMapping("/products/{id}")
	public void delete(@PathVariable(value = "id")long id) {
		ShoppingService.delete(id);
	}

}
