import  Jwt  from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60 * 1000;

let CreateCookieById: Function;

CreateCookieById = (id: Number) =>{
    return Jwt.sign({id}, 'net mohamed', {expiresIn: maxAge})
}

export default CreateCookieById;