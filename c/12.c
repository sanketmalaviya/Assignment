//WAP to take 10 no. Input from user and find out … 

#include<stdio.h>

int main(){
     int i,num,temp,n;
     printf("Enter the 10 number value\n");
     for ( i = 1; i <=10 ; i++)
     {
        printf("Number %d = ",i);
        scanf("%d",&num);
         temp = num;
     }
     printf("Enter the you find: ");
     scanf("%d",&n);
    
       if (temp==n)
     {
        printf("Input number  find out!!");
        
     }
     else{
        printf("Input number not found!!");
     }

     
    
    return 0;
}