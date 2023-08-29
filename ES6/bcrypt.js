//const bcrypt = require('bcryptJs')

let user = { name:"thejashwini", email:"thejashwinitheju912@gmail.com", password:"@Thejahwini!25"}

let Salt = bcrypt.genSaltSync(10);
let newpassword = bcrypt.hashSync(user.password,Salt)

console.log(newpassword)