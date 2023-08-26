// This is a pionter pionting to current object.

class acc{
    min_bal=1000;
    acc_bal=25000;
    account_details(){
        console.log("your bank account balance :" ,this.acc_bal)
    }


}
let c1 = new acc();
console.log(c1.min_bal)
console.log(c1.acc_bal)
c1.account_details();