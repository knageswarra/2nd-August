"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(_addressLine1, _addressLine2, _city) {
        this.addressLine1 = _addressLine1;
        this.addressLine2 = _addressLine2;
        this.city = _city;
    }
    Object.defineProperty(Address.prototype, "_addressLine1", {
        get: function () {
            return this.addressLine1;
        },
        set: function (_addressLine1) {
            this.addressLine1 = _addressLine1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "_addressLine2", {
        get: function () {
            return this.addressLine2;
        },
        set: function (_addressLine2) {
            this.addressLine2 = _addressLine2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "_city", {
        get: function () {
            return this.city;
        },
        set: function (_city) {
            this.city = _city;
        },
        enumerable: false,
        configurable: true
    });
    Address.prototype.getDetails = function () {
        return this.addressLine1 + "," + this.addressLine2 + "," + this.city;
    };
    return Address;
}());
exports.Address = Address;
var Student = /** @class */ (function () {
    function Student(_firstName, _lastName, _email, _address) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
        this.address = _address;
    }
    Object.defineProperty(Student.prototype, "_firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (_firstName) {
            this.firstName = _firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_lastName", {
        get: function () {
            return this.lastName;
        },
        set: function (_lastName) {
            this.lastName = _lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_email", {
        get: function () {
            return this.email;
        },
        set: function (_email) {
            this.email = _email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_address", {
        get: function () {
            return this.address;
        },
        set: function (_address) {
            this.address = _address;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getDetails = function () {
        return 'First Name: ' + this.firstName + '\n Last Name: ' + this.lastName + '\n Email: ' + this.email + "\n Address:" + this.address.getDetails();
    };
    return Student;
}());
exports.Student = Student;
/**let address=new Address('jogappa layout','veernapalya','bengalore');
let student=new Student('John','Doe','john2email.com',address);
student._firstName='Sachin';

//console.log(student._firstName);
//console.log(student);
console.log(student.getDetails())**/
