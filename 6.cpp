/*Create a class person having members name and age. Derive a class student
having member percentage. Derive another class teacher having member
salary. Write necessary member function to initialize, read and write data.
Write also Main function (Multiple Inheritance) */


#include<iostream>
using namespace std;

class person{
      protected:
        int age;
        string name;
      public:
      void setData(int age, string name){
            this->age = age;
            this->name = name;
      }
};

class student{
      protected:
      int m1,m2,m3;
      public:
      void stMarks(int m1, int m2, int m3){
            this->m1=m1;
            this->m2=m2;
            this->m3=m3;
      }
};

class teacher{
      protected:
      int sal;
      public:
      void setSalary(int sal){
            this->sal=sal;
      }
};


class school:public person, public student, public teacher{
       public:
       void marksheet(){
            cout<<" Age of the Student: "<<age<<endl;
            cout<<" Name of the Student: "<<name<<endl;
            cout<<" Marks of Physics is: "<<m1<<endl;
            cout<<" Marks of Chemistry is: "<<m2<<endl;
            cout<<" Marks of Maths is: "<<m3<<endl;
            cout<<" Percentage is: "<<(m1+m2+m3)/3<<endl;
            cout<<" Salary of the Teacher: "<<sal<<endl;
       }
};

int main(){
      
      school s1;
      s1.setData(21,"sanket");
      s1.stMarks(73,72,79);
      s1.setSalary(20000);
      s1.marksheet();
      return 0;
}
