export class Person {

    private firstName: string;
    private lastName: string;
    private email: string;
    constructor(_firstName:string,_lastName:string,_email:string)
    {
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.email=_email;

    }
  public  getDetails(): string
    {
        return 'First Name: '+this.firstName+'\n Last Name: '+this.lastName+'\n Email: '+this.email;
    }

}
let person=new Person('John','Doe','john2email.com');
console.log(person.getDetails());