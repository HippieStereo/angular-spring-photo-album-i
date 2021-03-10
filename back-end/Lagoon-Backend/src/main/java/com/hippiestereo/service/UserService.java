package com.hippiestereo.service;

import java.util.List;

import com.hippiestereo.model.User;

public interface UserService {
	
	List<User> findAllUsers();
	
	User findByUserName(String userName);
	
	User save(User user);

}
