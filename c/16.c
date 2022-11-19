//Sum of odd numbers WAP to print table up to given numbers

#include<stdio.h>
int main()
{
  int i=1,n,s=0;
  printf("Enter number to set range:");
  scanf("%d",&n);
  printf("\nODD number in range 0 to %d:\n\n",n);
    for (i = 0; i <=n; i++)
    {
        if(i%2==1){
            printf("%d ",i);
            s=s+i;
             
        }
    }
     printf("\nsum of ODD number is:%d : %d",n,s);
     return 0;
}