package com.hippiestereo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hippiestereo.model.User;
import com.hippiestereo.service.UserService;

@RestController
@RequestMapping("/rest")
public class UserResource {
	
    @Autowired
    private UserService userService;

    @RequestMapping("/user/users")
    public String findAllUsers() {
        return "";
    }

    @RequestMapping(value = "/user/userName", method = RequestMethod.POST)
    public User findByUserName(@RequestBody String userName) {
        System.out.println(userName);
        System.out.println(userService.findByUserName(userName));
        return userService.findByUserName(userName);
    }

    @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    public User updateUser(@RequestBody User user) {
        return userService.save(user);
    }

}
