package com.petpet.petpetv2_service.controller;

import com.petpet.petpetv2_service.model.Post;
import com.petpet.petpetv2_service.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

@CrossOrigin(value = "https://localhost:3000")
@RestController
@RequestMapping("/api/v1/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public Post addPost(@RequestParam Map<String,String> requestParams) {
        String strpost = requestParams.get("post");
        String email = requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String pfp = requestParams.get("pfp");

        Post post = Post.builder()
                .file(file)
                .name(name)
                .email(email)
                .post(strpost)
                .pfp(pfp)
                .timeStamp(new Date().toString())
                .build();

        try {
            post = postService.addPost(post);
        } catch (Exception e) {
            // Handle the exception appropriately
            e.printStackTrace();
        }
        return post;
    }
}