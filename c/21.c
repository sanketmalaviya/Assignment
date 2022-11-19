//Write a program make a summation of given number (E.g., 1523 Ans: -11) 
#include <stdio.h>

int main()
{
    int n, rem, sum = 0,r;
    printf("Enter the Number:- ");
    scanf("%d",&n);
    r = n % 10; 
    while (n != 0)
    {
        rem = n % 10;    
        sum = sum + rem; 
        n = n / 10;      
    }
    printf("Sum of all individual digits is %d", r+rem);
    return 0;
}