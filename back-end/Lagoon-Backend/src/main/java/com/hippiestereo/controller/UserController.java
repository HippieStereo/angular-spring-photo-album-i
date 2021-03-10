package com.hippiestereo.controller;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hippiestereo.model.User;
import com.hippiestereo.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public User registerUser(@RequestBody User user) {
		
		return userService.save(user);
		
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestBody Map<String, String> json) throws ServletException {
		
		if(json.get("username") == null || json.get("password") == null ) {
			
			throw new ServletException("Please fill in the User name and / or the password.");
			
		}
		
		String userName = json.get("username");
		String password = json.get("password");
		
		User user = userService.findByUserName(userName);
		
		if(user == null){
			
			throw new ServletException("User name not found.");
			
		}
		
		// - check user password from bdd and front-end
		if(!password.equals(user.getPassword())){
			
			throw new ServletException("User password is incorrect.");
			
		}
		
		return Jwts.builder().setSubject(userName).claim("roles", "user").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "secretkey").compact();
		
	}
	
}
