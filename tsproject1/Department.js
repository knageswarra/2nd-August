"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(departmentId, departmentName) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
    }
    Department.prototype.getDetails = function () {
        return "department id:" + this.departmentId + " department name:" + this.departmentName;
    };
    return Department;
}());
exports.Department = Department;
