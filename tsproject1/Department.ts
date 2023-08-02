export class Department
{
    constructor(private departmentId:number,private departmentName:string)
    {


    }
    public getDetails()
    {
        return "department id:"+this.departmentId +" department name:"+this.departmentName;
    }

}