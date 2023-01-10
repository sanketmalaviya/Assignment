//WAP to swap two numbers without using third variable

#include<stdio.h>
int main(){
 int a,b;
 printf("Enter the value of a:-  ");
 scanf("%d",&a);
 printf("Enter the value of b:-  ");
 scanf("%d",&b);
 
 printf("the value of a before swap is %d\n",a);
 printf("the value of b before swap is %d\n",b);
 printf("-------------------------------------\n");
 
 a = a+b;
 b = a-b;
 a = a-b;
 
 printf("the value of a after swap is %d\n",a);
 printf("the value of b after swap is %d\n",b); 
return 0;
}