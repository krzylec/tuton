package com.tuton.backend.exceptions.custom;

public class IDNotFoundException extends RuntimeException {
    public IDNotFoundException(String errMessage) {
        super(errMessage);
    }
}
