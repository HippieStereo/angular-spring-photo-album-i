package com.hippiestereo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hippiestereo.dao.CommentDao;
import com.hippiestereo.model.Comment;
import com.hippiestereo.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDao commentDao;

    public Comment save(Comment comment) {
        return commentDao.save(comment);
    }

    public Comment findOne (Long commentId) {
        return commentDao.findByCommentId(commentId);
    }

    public List<Comment> findByPhotoId (Long photoId) {
        return commentDao.findByPhotoId(photoId);
    }

}