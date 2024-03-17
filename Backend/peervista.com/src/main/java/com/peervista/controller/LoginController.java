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
import com.peervista.entity.User;
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

//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody Login login) {
//    	Login user = logSer.login(login.getUsername(), login.getPassword());
//        if (user != null) {
//        	return ResponseEntity.ok("User logged in successfully");
//        	// return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
//        }
//    }
    
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody Login loginCredentials) {
//        // Extract username and password from the LoginCredentials object
//        String username = loginCredentials.getUsername();
//        String password = loginCredentials.getPassword();
//
//        // Call your login service method passing username and password
//        Login user = logSer.login(username, password);
//
//        if (user != null) {
//            return ResponseEntity.ok("User logged in successfully");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
//        }
//    }
    
    
    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String username, @RequestParam String password) {
        // Call your login service method passing username and password
        Login user = logSer.login(username, password);

        if (user != null) {
            return ResponseEntity.ok("User logged in successfully");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }    
    
    @GetMapping("/find-By-Username/{username}")
    public Long findByUname(@PathVariable("username") String username){
    	Login userDetails = logSer.fetchByUsername(username);
    	return userDetails.getId();
    }

}
