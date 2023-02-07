// Write a program to find the max number from given two numbers using friend function 


#include<iostream>
using namespace std;

class A{
    int a;
    public:
    A(int a){
        this->a=a;
    }
    friend void MaxNumber(A obj1, B obj2);
};
class B{
    int a;
    public:
    B(int a){
        this->a=a;
    }
    friend void MaxNumber(A obj1, B obj2);
};
void MaxNumber(A obj1, B obj2){
     if(obj1.a > obj2.a){
        cout<<"\n Number in Class A is greatest "<<obj1.a<<endl;
     }
     else if(obj1.a < obj2.a){
        cout<<"\n Number in Class B is greatest "<<obj2.a<<endl;
     }
     else{
        cout<<" \n Number in Both class are Equal "<<endl;
     }
}

int main(){
    A a1(20);
    B b1(30);
    MaxNumber(a1,b1);
    return 0;
}