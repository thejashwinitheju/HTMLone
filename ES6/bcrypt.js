const bcrypt = require('bcryptjs')

let user = { name:"thejashwini", email:"thejashwinitheju912@gmail.com", password:"@Thejahwini!25"}

let Salt = bcrypt.genSaltSync(10);
let newpassword = bcrypt.hashSync(user.password,Saltalt)

console.log(newpassword)