package com.hippiestereo.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hippiestereo.model.Photo;
import com.hippiestereo.model.User;

@Repository
public interface PhotoDao extends CrudRepository<Photo, Long> {
	
    Photo save(Photo photo);

    List<Photo> findByUser(User user);

    List<Photo> findAll();

    Photo findByPhotoId(Long photoId);
}
