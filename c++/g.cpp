/*  Create a class person having members name and age. Derive a class student
    having member percentage. Derive another class teacher having member
    salary. Write necessary member function to initialize, read and write data.
    Write also Main function (Multiple Inheritance) */


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


