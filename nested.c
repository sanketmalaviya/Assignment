#include<stdio.h>
int main(){
  int a,b,c;
  printf("Enter the value of A:");
  scanf("%d",a);
  printf("Enter the value of B:");
  scanf("%d",b);
  printf("Enter the value of C:");
  scanf("%d",c);

  if(a > b){
    if(a > c){
        printf("%d is greater number:",a);
    }
    else{
        printf("%d is greater number:",c);
    }
  }
  else{
    if(b > c){
        printf("%d is greater number:");
    }
    else{
        printf("%d is greater number:");
    }
  }
  return 0;
}
 
