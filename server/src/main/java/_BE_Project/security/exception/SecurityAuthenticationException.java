package _BE_Project.security.exception;

import org.springframework.security.core.AuthenticationException;

public class SecurityAuthenticationException extends AuthenticationException {

    SecurityExceptionCode securityExceptionCode;
    public SecurityAuthenticationException(SecurityExceptionCode securityExceptionCode) {
        super(securityExceptionCode.getMessage());
        this.securityExceptionCode = securityExceptionCode;
    }
}
