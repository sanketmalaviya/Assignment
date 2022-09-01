//) Write a program that prints prime numbers between 1 to n. Number n should be accepted as command line input.

#include <stdio.h>

int main()
{
    int n,i;
    printf("Enter the prime number value:-  ");
    scanf("%d",&n);
    if (n == 1 || n == 2)
    {
        printf("Number is Prime");
    }
    for (i = 2; i < n; i++){
        if(n%i==0){
            printf("Number is Not prime");
            break;
        }
        else{
            printf("Number is Prime");
            break;
        }
    }
        return 0;
}
