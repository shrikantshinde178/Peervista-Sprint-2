/**
 * 
 */
package com.peervista.repository;

/**
 * 
 */

import com.peervista.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    User findByUsername(String username);
    
    User findByEmail(String email);
    
    // Additional custom query methods if needed
}

