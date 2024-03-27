package com.tuton.backend.controllers.user;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class TokenAuthentication extends UsernamePasswordAuthenticationToken {
    private final MyUserPrincipal principal;

    public TokenAuthentication(MyUserPrincipal principal) {
        super(principal, null, principal.roles);
        this.principal = principal;
    }

}
