export const formValidate=(email,password)=>{
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  const isValidPassowrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if(!isValidEmail){
    console.log("Email Not Valid")
  }
  if(!isValidPassowrd){
    console.log("Password Not Valid")
  }
}