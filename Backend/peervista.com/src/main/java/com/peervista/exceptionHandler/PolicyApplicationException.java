package com.peervista.exceptionHandler;

public class PolicyApplicationException extends RuntimeException {
    public PolicyApplicationException(String message) {
        super(message);
    }
}
