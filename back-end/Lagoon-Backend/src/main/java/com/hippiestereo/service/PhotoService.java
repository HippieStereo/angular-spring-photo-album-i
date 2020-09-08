package com.hippiestereo.service;

import java.util.List;

import com.hippiestereo.model.Photo;
import com.hippiestereo.model.User;

public interface PhotoService {
	
    Photo save(Photo photo);

    List<Photo> findAll();

    List<Photo> findByUser(User user);

    Photo findByPhotoId(Long photoId);

}
