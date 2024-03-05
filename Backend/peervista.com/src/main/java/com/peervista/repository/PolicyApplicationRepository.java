package com.peervista.repository;

import com.peervista.entity.PolicyApplication;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyApplicationRepository extends JpaRepository<PolicyApplication, Long> {
    
	// You can add custom query methods here if needed
	 List<PolicyApplication> findByInCartTrue();
//
//	 @Query("Select p from PolicyApplication p where p.id=?1")
//	PolicyApplication save(Long userId, Long id);
//	 
//	 @Query("INSERT INTO PolicyApplication (userId, id) VALUES (?1, ?2)")
//	 PolicyApplication save(Long userId, Long id);
}
