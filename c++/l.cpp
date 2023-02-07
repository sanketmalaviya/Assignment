/*    Write a program to calculate the area of circle, rectangle and triangle using 
     Function Overloading 
     Rectangle: Area * breadth 
     Triangle: ½ *Area* breadth 
     Circle: Pi * Area *Area    */




#include<iostream>
using namespace std;

void Area(int l, int w){
    cout<<" Area of the Rectagle: "<<l*w<<endl;
}

void Area(float h, int b){
    cout<<" Area of the Triangle: "<<0.5*b*h<<endl;
}

void Area(int r){
    cout<<"Area of the Circle: "<<3.14*r*r<<endl;
}

int main(){
    Area(5,6);
    Area(8.5,7);
    Area(6);
}