var Person = /** @class */ (function () {
    function Person(_firstName, _lastName, _email) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
    }
    Person.prototype.getDetails = function () {
        return 'First Name: ' + this.firstName + '\n Last Name: ' + this.lastName + '\n Email: ' + this.email;
    };
    return Person;
}());
var person = new Person('John', 'Doe', 'john2email.com');
console.log(person.getDetails());
