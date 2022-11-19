//Write a program of Addition, Subtraction, Division, Multiplication using constructor


#include<iostream>
using namespace std;

class cal{
    int a,b;
    public:
    cal(int a, int b){
        this->a=a;
        this->b=b;
    }
   void addition()
   {
      cout<<"Addition of " <<a<< " and " <<b<< " is " <<a+b<<endl;
   }
   void Subtraction()
   {
      cout<<"Subtraction of " <<a<<" and " <<b<<" is " <<a-b<<endl;
   }
   void Multiplication()
   {
      cout<<"Multiplication of " <<a<< " and " <<b<< " is " <<a*b<<endl;
   }
    void division()
   {
      cout<<"Division of " <<a<< " and " <<b<< " is " <<a/b<<endl;
   }
};

int main(){
    
    cal c1(5,6),c2(7,4),c3(5,5),c4(10,2);
    c1.addition();
    c2.Subtraction();
    c3.Multiplication();
    c4.division();
    
    return 0;
}
 