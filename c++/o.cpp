 //Write a program of to swap the two values using templates

#include<iostream>
using namespace std;

template <class t1>
class A{
    t1 a,b;
    public:
    A(t1 a,t1 b){
        this->a=a;
        this->b=b;

    }
    void swap(){
     a = a+b;
     b = a-b;
     a = a-b;
  }
};


int main(){
    A <int> a1(10,20);
    return 0;
}

