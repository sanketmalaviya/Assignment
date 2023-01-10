//WAP to print number in reverse order e.g.: number = 64728 ---> reverse =82746


#include<stdio.h>

int main(){
int n,rev=0,r;
printf("Enter the Number:- ");
scanf("%d",&n);
while(n!=0){
    r=n%10;
    rev=rev*10+r;
    n/10;
}
printf("Reversed Number:%d",rev);
    return 0;
}