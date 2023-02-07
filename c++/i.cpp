/* Write a program to Mathematic operation like Addition, Subtraction, 
Multiplication, Division Of two number using different parameters and 
Function Overloading */


#include<iostream>
using namespace std;

void Addition(int a, int  b, int c){
    cout<<" Addition of "<<a<< "and " <<b<<" and "<<c<< " is "<<a+b+c<<endl;
}
void Subtraction(int a,  float b){
    cout<<" Subtraction of "<<a<< " and " <<b<< " is "<<a-b<<endl;
}
void Multiplication(float a, int b){
    cout<<" Multiplication of "<<a<< " and " <<b<< " is "<<a*b<<endl;
}
void Division(int a, int b){
    cout<<" Division of "<<a<< " and " <<b<< " is "<<a/b<<endl;
}

int main(){

    Addition(3,4,5);
    Subtraction(4,5.5);
    Multiplication(4.5,6);
    Division(10,2);
    return 0;
}
