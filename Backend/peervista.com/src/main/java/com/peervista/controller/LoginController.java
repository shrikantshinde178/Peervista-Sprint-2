/**
 * 
 */
package com.peervista.controller;

/**
 * 
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.peervista.entity.Login;
import com.peervista.service.LoginService;

import lombok.AllArgsConstructor;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@AllArgsConstructor
@RequestMapping("/api/auth")
public class LoginController {
    @Autowired
    private LoginService logSer;

    @PostMapping("/signup")
    public ResponseEntity<Login> signupUser(@RequestBody Login user) {
    	Login newUser = logSer.signup(user);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Login login) {
    	Login user = logSer.login(login.getUsername(), login.getPassword());
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
