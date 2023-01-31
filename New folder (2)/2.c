//Write a program to make Simple calculator (to make addition, subtraction,multiplication, division and modulo) 

#include<stdio.h>

int main()
{
    int a,b;
    printf("Enter 1 the value of A ");
    scanf("%d",&a);
    printf("Enter the value of B ");
    scanf("%d",&b);
    printf("Addition of %d and %d is %d\n",a,b,a+b);
    printf("subration of %d and %d is %d\n",a,b,a-b);
    printf("multiplaction of %d and %d is %d\n",a,b,a*b);
    printf("division of %d and %d is %d\n",a,b,a/b);
    
    return 0;
}