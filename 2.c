#include<stdio.h>

int main()
{
    int i=1,n,f=0,f1=1,f2=1;
    printf("Enter the number of fibonacci value:-  ");
    scanf("%d",&n);
    do{
        i++;
         printf("%d ",f);
         f1=f2;
         f2=f;
         f=f1+f2;
    }while(i<=n);
    return 0;
}


