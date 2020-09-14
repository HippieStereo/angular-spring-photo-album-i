package com.hippiestereo.service;

import java.util.List;

import com.hippiestereo.model.Comment;

public interface CommentService {
    Comment save(Comment comment);
    List<Comment> findByPhotoId (Long photoId);
    Comment findOne(Long commentId);

}