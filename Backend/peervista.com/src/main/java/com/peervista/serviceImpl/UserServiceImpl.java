package com.peervista.serviceImpl;

import com.peervista.entity.User;
import com.peervista.repository.UserRepository;
import com.peervista.service.UserService;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user, int userId) {
        User existingUser = userRepository.findById((long) userId)
                .orElseThrow();

        existingUser.setPhoneNumber(user.getPhoneNumber());
        existingUser.setAddress(user.getAddress());
        // Update other user details as needed

        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(int userId) {
        User existingUser = userRepository.findById((long) userId)
                .orElseThrow();
        userRepository.delete(existingUser);
    }

    @Override
    public User fetchUser(int userId) {
        return userRepository.findById((long) userId)
                .orElseThrow();
    }

	 @Override
	 	public User findById(Long userId) {
		 	Optional<User> userOptional = userRepository.findById(userId);
		 	return userOptional.orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
	 }
	
}
