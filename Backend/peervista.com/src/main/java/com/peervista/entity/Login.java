/**
 * 
 */
package com.peervista.entity;

import jakarta.persistence.CascadeType;

/**
 * 
 */

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;
	
    @OneToOne(mappedBy = "login", cascade = CascadeType.ALL)
    private User user;

    public void signup(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;

        User newUser = new User();
        // this.user = new User();
        this.user.setUsername(username);
        this.user.setEmail(email);
        this.user.setPassword(password);
        
        setUser1(newUser);
        newUser.setLogin(this);
        
   }
    
    public void setUser1(User user) {
        this.user = user;
        user.setLogin(this);
    }

    
    /**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}
	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	public void setUser(User newUser) {
		this.user = newUser;
		
	}
	
}
