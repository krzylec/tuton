package com.tuton.backend.exceptions.custom;

public class IncorrectInputException extends RuntimeException {

    public IncorrectInputException(String errMessage) {
        super(errMessage);
    }
}
