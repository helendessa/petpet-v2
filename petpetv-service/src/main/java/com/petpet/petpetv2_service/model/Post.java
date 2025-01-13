package com.petpet.petpetv2_service.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    private String id;
    private String post;
    private String name;
    private String email;
    private String image;
    private String pfp;
    private String timeStamp;
    private String file;
}
