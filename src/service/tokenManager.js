import jwt_decode from "jwt-decode";


console.log("rlt:");
console.log(window.sessionStorage.getItem("tkn"));

const TokenManager = {
    getAccessToken: () => window.sessionStorage.getItem("tkn"),
    getClaims: () => {
        if (!window.sessionStorage.getItem("tkn")) {
            return undefined;
        }
        return jwt_decode(window.sessionStorage.getItem("tkn"));
    },
    setAccessToken: (token) => {
        sessionStorage.setItem("tkn", token);
        const claims = jwt_decode(token);
        sessionStorage.setItem("sub", claims.sub);
        sessionStorage.setItem("role", claims.role);
        sessionStorage.setItem("userId", claims.userId);
       
        return claims;
    },
    clear: () => {
       
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("sub");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("userId");
    }
}

export default TokenManager;