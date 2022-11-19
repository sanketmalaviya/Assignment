//Sum of even numbers 

#include<stdio.h>
int main()
{
  int i=1,n,s=0;
  printf("Enter number to set range:");
  scanf("%d",&n);
  printf("\nEven number in range 0 to %d:\n\n",n);
    for (i = 0; i <=n; i++)
    {
        if(i%2==0){
            printf("%d ",i);
            s=s+i;
             
        }
    }
     printf("\nsum of even number is:%d : %d",n,s);
     return 0;
}