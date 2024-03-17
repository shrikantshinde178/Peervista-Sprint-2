/**
 * 
 */
package com.peervista.repository;

/**
 * 
 */
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.peervista.entity.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
    
	Login findByUsername(String username);
    
}
