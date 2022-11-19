/*pattern
A
B C
D E F
G H I J
K L M N O  */

#include<stdio.h>

int main()
{
    int i,j,k=1,n;

    printf("Enter the no of lines:- ");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++,k++)
        {
            printf("%4c",(char)(k+64));   
        }
        printf("\n");
    }
    return 0;
}

