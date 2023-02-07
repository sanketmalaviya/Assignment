/*  pattern
A
A B 
A B C
A B C D
A B C D E
*/

#include<stdio.h>
 
int main()
{
    int i,j,n;
 
    printf("Enter the no of lines:- ");
    scanf("%d",&n);
 
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            printf("%c",(char)(j+64));
        }
 
        printf("\n");
    }
    return 0;
}