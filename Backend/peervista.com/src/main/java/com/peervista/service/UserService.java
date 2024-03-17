/**
 * 
 */
package com.peervista.service;

/**
 * 
 */

import com.peervista.entity.User;

public interface UserService {
    
    User registerUser(User user);
    
    User updateUser(User user, int userId);
    
    void deleteUser(int userId);
    
    User fetchUser(int userId);
    
    User findById(Long userId);
    
    User fetchByUsername(String username);
}
