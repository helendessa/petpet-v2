package com.petpet.petpetv2_service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "posts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {

    @Id
    @GeneratedValue(generator = "uuid")
    @UuidGenerator
    private UUID id;

    @Lob
    private String post;
    private String name;
    private String email;

    @Lob
    private String image;
    private String pfp;
    private String timeStamp;

}
