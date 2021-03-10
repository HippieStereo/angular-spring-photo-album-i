package com.hippiestereo.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hippiestereo.model.Comment;

@Repository
public interface CommentDao extends CrudRepository<Comment, Long> {
    Comment save(Comment comment);
    Comment findByCommentId (Long commentId);
    List<Comment> findByPhotoId (Long photoId);
}