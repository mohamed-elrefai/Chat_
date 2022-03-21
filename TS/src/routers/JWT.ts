import  Jwt  from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60 * 1000;

let CreateCookieById: Function;
let CreateCookieByUsername: Function;

CreateCookieById = (id: Number) =>{
    return Jwt.sign({id}, 'net mohamed', {expiresIn: maxAge})
}
CreateCookieByUsername = (username: String) =>{
    return Jwt.sign({username}, 'net mohamed', {expiresIn: maxAge})
}

export { CreateCookieById, CreateCookieByUsername }