package com.peervista.controller;

import com.peervista.entity.User;
import com.peervista.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@AllArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService us;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = us.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable int userId, @RequestBody User user) {
        User updatedUser = us.updateUser(user, userId);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable int userId) {
        us.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/fetchUserBy/{userId}")
    public ResponseEntity<User> fetchUser(@PathVariable int userId) {
        User user = us.fetchUser(userId);
        return ResponseEntity.ok(user);
    }
}
