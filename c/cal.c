#include<stdio.h>

int main(){

int a,b,cal,y;

printf("Enter the Value of A:");
scanf("%d",&a);
printf("Enter the value of B:");
scanf("%d",&b);
printf("Enter the Number");
scanf("%d",&cal);]
do
{
    switch (cal)
{
case 1:
    printf("Addition of A and B is %d %d",a+b);
    break;
case 2:
    printf("Subration of A and B is%d %d",a-b);
    break;
case 3:
    printf("Multiplaction  of A and B is%d %d",a*b);
    break;
case 4:
    printf("Division of A and B is%d %d",a/b);
    break;    
default:
     printf("Number Not Found!!!!");
    break;
}
printf("");
} while ()




  return 0;
}