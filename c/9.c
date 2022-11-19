// WAP to find number is even or odd using ternary operator

#include<stdio.h>

int main(){
 
 int a;
 printf("Enter your number:");
 scanf("%d",&a);
 (a % 2 == 0) ? 
     printf("%d number is even",a)  :
     printf("%d number is odd",a);
    return 0;
}