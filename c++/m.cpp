//Write a program to swap the two numbers using friend function withou using third variable 

#include<iostream>
using namespace std;

class B;
class A{
     int a;
     public:
     A(int a){
        this->a=a;
     }
     friend void swap(A obj1, B obj2);
};
class B{
     int a;
     public:
     B(int a){
        this->a=a;
     }
     friend void swap(A obj1, B obj2);
};


void swap(A obj1, B obj2){
    obj1.a = obj1.a+obj2.a;  
    obj2.a = obj1.a-obj2.a;  
    obj1.a = obj1.a-obj2.a;  
}

int main(){
    
    A a1(10);
    B b1(20);
    swap(a1,b1);
    return 0;
}
