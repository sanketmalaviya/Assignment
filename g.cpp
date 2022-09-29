/*  Create a class person having members name and age. Derive a class student
    having member percentage. Derive another class teacher having member
    salary. Write necessary member function to initialize, read and write data.
    Write also Main function (Multiple Inheritance) */


#include<iostream>
using namespace std;

class person{
    protected:
    string name;
    int id;
    public:
    void SetData(string name, int id){
        this->name=name;
        this->id=id;
    }
};

class student : public person{
    protected:
    int m1,m2;
    public:
    void SetMarks(int m1, int m2){
        this->m1=m1;
        this->m2=m2;
    }
};

class teacher : public student{
    protected:
    int sal;
    public:
    void SetSal(int sal){
        this->sal=sal;
    }
    void AddData(){
        cout<<"Name of Student is: "<<endl;
        cout<<"RollNO of Student is: "<<endl;
        cout<<"Marks of Maths is: "<<endl;
        cout<<"Marks of physics is: "<<endl;
        cout<<"Average of Marks: "<<(m1+m2)/2 <<endl;
        cout<<"Salary of Teacher: "<<endl;
    }
};

int main(){
  
teacher t1;
t1.SetData("sanket",101);
t1.SetMarks(75,77);
t1.SetSal(20000);
t1.AddData();
    return 0;
}


