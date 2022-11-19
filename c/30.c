//Write a program to find out the max number from given array using function 

#include<stdio.h>

int main()
{
    int max,i;
    int a[5] = {1,5,9,7,3};
    max = a[0];
    for(i=0;i<7;i++){
        if(a[i]>max){
            max = a[i];
        }
    }
    printf("Maximum value of the array is %d\n",max);
    return 0;
}