import zod from "zod";

export const zodSigninSchema = zod.object({
   
     email: zod.string().email("Invalid email format")
       .refine(value => value.endsWith('.com'), { message: "Only '.com' domains are allowed" })
   ,
    password: zod.string()
    .min(8,{ message: " password must be atleast 8 characters long " })
    .refine( value => /[A-Z]/ .test(value) , { message: "Password must contain atleast one capital letter" } )
    .refine( value => /[a-z]/ .test(value) , { message: "Password must contain atleast one small letter" } )
    .refine( value => /[0-1]/ .test(value) ,{ message: "Password must constain atleast ine number"} ),
}
)
