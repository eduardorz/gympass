import { NextFunction, Request, Response } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const {token} = req.headers;
    
    if(token === "autenticado") next()
    else res.status(400).json({message: "ERROR. Falta Autenticación."})
}

export default auth;


// ! PARA ACTIVAR ESTE MIDDLEWARE:
// !  ingresar a thunderclient/headers
// !  establecer un header llamado "token" con valor "autenticado"
//!   incluir el middleware en la ruta ('/users', AUTH, getUsers)


//* los HEADERS son objetos que tiene más información que viaja
//* con la petición

//* todo dentro del objeto request