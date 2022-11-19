//WAP to print Fibonacci series up to given numbers 

#include <stdio.h>

int main()
{
    int a = 0, b = 1, c, i,n;
    printf("Enter the Element number:");
    scanf("%d",&n);
    printf("%d %d ", a, b);
    for (i = 3; i <=n ; i++)
    {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }
    return 0;
}