// WAP to create simple calculator using class


#include <iostream>
using namespace std;

class a
{
   int a,b;
   public:
   void setData(int a, int b){
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

    a a1,a2,a3,a4;
    a1.setData(5,6);
    a1.addition();
    a2.setData(20,12);
    a2.Subtraction();
    a3.setData(5,5);
    a3.Multiplication();
    a4.setData(10,3);
    a4.division();
    return 0;
}


