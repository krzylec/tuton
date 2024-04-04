package com.tuton.backend.controllers.user;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class TokenAuthentication extends UsernamePasswordAuthenticationToken {

    public TokenAuthentication(MyUserPrincipal principal) {
        super(principal, null, principal.getRoles());
    }

}
