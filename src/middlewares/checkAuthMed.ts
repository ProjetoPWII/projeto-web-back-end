import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";

interface Payload{
  sub:string
}

export function checkAuthenticationMed(req:Request, resp:Response, next:NextFunction){
  
    const authToken = req.headers.authorization

    if(!authToken){
        return resp.status(401).end()
    }

    const [, token] = authToken.split(" ")


    try{
      // check if token and jwt key are same
      const {sub} = verify(
        token,
        process.env.JWT_SECRET as Secret
      ) as Payload
      // retrieves the user id and inserts it in the request
      req.crm = sub

      return next()

    }catch(err){
         return resp.status(401).end()
    }
}