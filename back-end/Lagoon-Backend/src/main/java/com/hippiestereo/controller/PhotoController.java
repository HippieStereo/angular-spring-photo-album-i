package com.hippiestereo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hippiestereo.model.Photo;
import com.hippiestereo.service.PhotoService;

@RestController
@RequestMapping("/photo")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @GetMapping(value = "/allPhotos")
    public List<Photo> getAllPhotos () {
    	
        return photoService.findAll();
        
    }

}
