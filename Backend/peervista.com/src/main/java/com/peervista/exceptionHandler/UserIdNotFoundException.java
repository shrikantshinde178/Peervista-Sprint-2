/**
 * 
 */
package com.peervista.exceptionHandler;

/**
 * 
 */


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserIdNotFoundException extends RuntimeException {
    
    private static final long serialVersionUID = 1L;
    
    public UserIdNotFoundException(String message) {
        super(message);
    }
}
