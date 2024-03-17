/**
 * 
 */
package com.peervista.serviceImpl;

/**
 * 
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peervista.entity.Login;
import com.peervista.entity.User;
import com.peervista.repository.LoginRepository;
import com.peervista.service.LoginService;

import jakarta.transaction.Transactional;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginRepository LogRepository;

    @Override
    public Login signup(Login login) {
        // Implement signup logic (e.g., password hashing)
        return LogRepository.save(login);
    }
    
    @Transactional
    public void signup(String username, String email, String password) {
        Login login = new Login();
        login.signup(username, email, password);
        LogRepository.save(login); // Save the Login entity
    }

    @Override
    public Login login(String username, String password) {
        // Implement login logic
    	Login login = LogRepository.findByUsername(username);
        if (login != null && login.getPassword().equals(password)) {
            return login;
        }
        return null;
    }
    
    @Override
	public Login fetchByUsername(String username) {
		return LogRepository.findByUsername(username);
	}
	

}



