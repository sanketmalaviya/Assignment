/*  Create a class person having members name and age. Derive a class student
    having member percentage. Derive another class teacher having member
    salary. Write necessary member function to initialize, read and write data.
    Write also Main function (Multiple Inheritance) */


// #include<iostream>
// using namespace std;

// class person{
//     protected:
//     string name;
//     int id;
//     public:
//     void SetData(string name, int id){
//         this->name=name;
//         this->id=id;
//     }
// };

// class student : public person{
//     protected:
//     int m1,m2;
//     public:
//     void SetMarks(int m1, int m2){
//         this->m1=m1;
//         this->m2=m2;
//     }
// };

// class teacher : public student{
//     protected:
//     int sal;
//     public:
//     void SetSal(int sal){
//         this->sal=sal;
//     }
//     void AddData(){
//         cout<<"Name of Student is: "<<endl;
//         cout<<"RollNO of Student is: "<<endl;
//         cout<<"Marks of Maths is: "<<endl;
//         cout<<"Marks of physics is: "<<endl;
//         cout<<"Average of Marks: "<<(m1+m2)/2 <<endl;
//         cout<<"Salary of Teacher: "<<endl;
//     }
// };

// int main(){
  
// teacher t1;
// t1.SetData("sanket",101);
// t1.SetMarks(75,77);
// t1.SetSal(20000);
// t1.AddData();
//     return 0;
// }



#include<iostream>
using namespace std;
class Person{
	protected:
		string name;
		int age;
	public:
		void setPerson(int age, string name){
			this->name = name;
			this->age = age;
		}
		void displayPerson(){
			cout<<"Name:  "<<name<<endl;
			cout<<"Age:    "<<age<<endl;
		}
		
	
};
class Student: Person{
	protected:
		float per;
	public:
		void setStudent(string n, int a, float per){
			this->per = per;
			setPerson(a,n);
		}
		void displayStudent(){
			cout<<"Student details are: \n";
			displayPerson();
			cout<<"Prcentage is:  "<<per<<endl;
		}
};
class  Teacher: Person{
	protected:
		float sal;
	public:
		void setTeacher(string n, int a, float sal){
			this->sal = sal;
			setPerson(a,n);
		}
		void displayTeacher(){
			cout<<"Teachers details are: \n";
			displayPerson();
			cout<<"Salary:  "<<sal<<endl;
		}
};


int main(){
	Student s;
	s.setStudent("John", 12,80);
	s.displayStudent();
	Teacher t;
	t.setTeacher("Abraham", 25, 19000.98);
	t.displayTeacher();
}


