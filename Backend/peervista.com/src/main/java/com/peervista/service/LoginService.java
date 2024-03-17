/**
 * 
 */
package com.peervista.service;

import com.peervista.entity.Login;
import com.peervista.entity.User;

/**
 * 
 */
public interface LoginService {
    
	Login signup(Login user);
   
    Login login(String username, String password);
    
    Login fetchByUsername(String username);
}

