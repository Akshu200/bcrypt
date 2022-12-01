const bcrypt = require('bcrypt');



const passwordSecured = async ( password )=>{

      const hashedPass =await bcrypt.hash(password , 10);
    //   console.log(hashedPass);

     const matchedPass = await bcrypt.compare("akshay@123" ,hashedPass ); //(password , hashedPass);
     if(matchedPass){
        
        console.log("Password matched successgully");
     }
     else{
        console.log("password not matched")
     }
}


passwordSecured('akshay@123');