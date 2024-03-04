package com.tuton.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tuton.backend.exceptions.custom.IDNotFoundException;
import com.tuton.backend.exceptions.custom.IncorrectInputException;

@ControllerAdvice
@RestController
public class GlobalExceptionHandler {

    @ExceptionHandler(IDNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleNotFoundException(IDNotFoundException ex) {
        return ex.getMessage();
    }

    @ExceptionHandler(IncorrectInputException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleNotFoundException(IncorrectInputException ex) {
        return ex.getMessage();
    }
}
