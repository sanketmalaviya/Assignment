/*Write a program to print the following output using the for loop.
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5 */

#include<stdio.h>

int main()
{
   int i,j,n;
   printf("Enter the number of pattern:-  ");
   scanf("%d",&n);

   for(i=0 ; i<=n ; i++){
    for(j=1 ; j<=i ; j++){
        printf("%d",i);
    }
        printf("\n");
   }

    return 0;
}
