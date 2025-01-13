package com.petpet.petpetv2_service.repository;

import com.petpet.petpetv2_service.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity,String> {

}
