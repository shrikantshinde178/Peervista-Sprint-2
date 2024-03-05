/**
 * 
 */
package com.peervista.service;

import com.peervista.entity.Login;

/**
 * 
 */
public interface LoginService {
    Login signup(Login user);
    Login login(String username, String password);
}

