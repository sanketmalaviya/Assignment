/* Assume that the test results of a batch of students are stored in three different 
   classes. Class Students are storing the roll number. Class Test stores the marks 
   obtained in two subjects and class result contains the total marks obtained in 
   the test. The class result can inherit the details of the marks obtained in the 
   test and roll number of students. (Multilevel Inheritance)  */

 #include<iostream>
 using namespace std;

 class student{
     protected:
     int id;
     public:
     void setId(int id){
        this->id=id;
     }
 };

 class test : public student{
     protected:
     int m1,m2;
     public:
     void setMarks(int m1, int m2){
         this->m1=m1;
         this->m2=m2;
     }
 };

 class result : public test{
    public:
    void Marksheet(){
       cout<<" Roll.no of the Student: "<<id<<endl;
       cout<<" Marks of physics is: "<<m1<<endl;
       cout<<" Marks of Maths is: "<<m2<<endl;
       cout<<" Percentage is: "<<(m1+m2)/2<<endl;
    }
  };
 

 int main(){
   
   result r1,r2,r3;
   r1.setId(101);
   r1.setMarks(81,84);
   r1.Marksheet();
   cout<<endl;
   r2.setId(102);
   r2.setMarks(70,72);
   r2.Marksheet();
   cout<<endl;
   r3.setId(103);
   r3.setMarks(69,75);
   r3.Marksheet();
    return 0;
 }