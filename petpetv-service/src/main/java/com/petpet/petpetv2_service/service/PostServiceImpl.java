package com.petpet.petpetv2_service.service;

import com.petpet.petpetv2_service.entity.PostEntity;
import com.petpet.petpetv2_service.model.Post;
import com.petpet.petpetv2_service.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {

    private final PostEntityRepository postEntityRepository;

    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try {
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post, postEntity);

            if (post.getFile() != null && post.getFile().equalsIgnoreCase("null")) {
                postEntity.setImage(post.getFile());
            } else {
                postEntity.setImage(null);
            }

            postEntity = postEntityRepository.save(postEntity);

            post.setId(postEntity.getId().toString()); // Convert UUID to String
            post.setFile(null);
            post.setImage(postEntity.getImage());
        } catch (Exception e) {
            throw new Exception("Error while adding post: " + e);
        }
        return post;
    }
}