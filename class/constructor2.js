class account {
  id;
  name;
  acc_bal;
  min_bal = 5000;

  //constructor

  constructor(id,name,acc_bal){   
    this.id = id;
    this.name =name;
    this.acc_bal=acc_bal;
}

//method

get_bal(){
   return this.acc_bal = this.acc_bal-this.min_bal
        
}
}
let theju = new account(101,"dev",50000);
let krupa = new account(102,"gowri",570000);
console.log(theju)
console.log(theju.get_bal())
console.log(krupa)

