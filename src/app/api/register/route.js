import User from "@/models/users";
import bcrypt from "bcrypt"
import { dbConnect } from "@/config/db";
import { NextResponse } from "next/server";


export async function POST(req){

 if(req.method==='POST'){

    try{
        const data = await req.json();
        const {name,email,password} = data;
        dbConnect();

        if(!name||!email||!password){
          return NextResponse.json({error: 'Please fill all the required fields'},{status:400});
        }

        const userExists = await User.findOne({email});

        console.log(userExists);

        if(userExists){
            return NextResponse.json({error: 'Please use a different email , user already exist'},{status:400})
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password: hash
        })



        return NextResponse.json({message: 'User created successfully'},{status:201,user})

    }catch(err){
      return NextResponse.json({error:err.message},{status:500})
    }
 }
    
}