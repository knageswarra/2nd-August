export class Address
{
    private addressLine1:string;
    private addressLine2:string;
    private city:string;
    public set _addressLine1(_addressLine1:string)
    {
        this.addressLine1=_addressLine1;
    }
    public set _addressLine2(_addressLine2)
    {
        this.addressLine2=_addressLine2;
    }
    public set _city(_city)
    {
        this.city=_city
    }
    public get _addressLine1():string
    {
        return this.addressLine1;
    }
    public get _addressLine2():string
    {
        return this.addressLine2;
    }
    public get _city():string
    {
        return this.city;
    }
    constructor(_addressLine1:string,_addressLine2:string,_city:string)
    {
        this.addressLine1=_addressLine1;
        this.addressLine2=_addressLine2;
        this.city=_city;
    }
    public getDetails():string
    {
        return this.addressLine1+","+this.addressLine2+","+this.city;
    }

}
export class Student {
   private firstName: string;
    private lastName: string;
    private email: string;
    private address:Address;
    constructor(_firstName:string,_lastName:string,_email:string,_address:Address){
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.email=_email;
        this.address=_address;
    }
    public get _firstName():string
    {
        return this.firstName;
    }
    public set _firstName(_firstName:string)
    {
        this.firstName=_firstName;
    }
    public get _lastName():string
    {
        return this.lastName;
    }
    public set _lastName(_lastName:string)
    {
        this.lastName=_lastName;        
    }
    public get _email():string
    {
        return this.email;
    }
    public set _email(_email:string)
    {
        this.email=_email;
    }
    public set _address(_address:Address)
    {
        this.address=_address;
    }
    public get _address():Address
   {
    return this.address;
   }
   public  getDetails(): string
    {
        return 'First Name: '+this.firstName+'\n Last Name: '+this.lastName+'\n Email: '+this.email+"\n Address:"+this.address.getDetails();
    }
}
/**let address=new Address('jogappa layout','veernapalya','bengalore');
let student=new Student('John','Doe','john2email.com',address);
student._firstName='Sachin';

//console.log(student._firstName);
//console.log(student);
console.log(student.getDetails())**/

 