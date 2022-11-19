//  Write a program to concatenate the two strings using Operator Overloading


#include<iostream>
using namespace std;

class a{
    string s;
    public:
    a(){}
    a(string s){
        this->s=s;
    }
    void display(){
        cout<<s<<endl;
    }
    a operator+ (a obj){
        a temp;
        temp.s = s+obj.s;
        return temp;
    }
};


int main(){
    
    a a1("Sanket "), a2(" Malaviya"),a3;
    a3 = a1+a2;
    a3.display();
    return 0;
}