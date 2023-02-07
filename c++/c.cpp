//  Write a program to find the multiplication values and the cubic values using inline function


#include<iostream>
using namespace std;

class A{
    int a,b,l,B,h;
    public:
    inline void setData1(int a, int b){
        this->a=a;
        this->b=b;
    }
    inline void setData2(int l, int B, int h){
        this->l=l;
        this->B=B;
        this->h=h;

    }
       
    
    inline void Mul(){
        cout<<"Multiplication of "<<a<< " and "<<b<<" is "<<a*b<<endl; 
    }
    inline void cubic(){
        cout<<"Cubic Value is "<< 2*(l * B + B * h + h *l )<<endl;
    }
};

int main(){
   
   A a1;
   a1.setData1(5,6);
   a1.Mul();
   a1.setData2(4,5,6);
   a1.cubic();
    return 0;
}