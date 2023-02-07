// WAP to show difference between Structure and Union. 

#include<stdio.h>

struct Emp{
    int id;
    char name[20]; 
};

union Emp1{
    int id;
    char name[20]; 
};

int main()
{
   struct Emp e1;
   union  Emp1 e2;

   printf("The size of Employee structure = %d\n",sizeof(e1));
   printf("The size of Employee union = %d\n",sizeof(e2));
   
    return 0;
}