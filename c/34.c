// WAP to take two Array input from user and sort them in ascending or descending order as per user’s choice


#include<stdio.h>
int main(){
  int i,j,temp,n,ch;
  int a[10];
  printf("Enter the value Number:- ");
  scanf("%d",&n);
  printf("Enter the Number:\n");
  for(i=0 ; i<n ; i++){
    scanf("%d",&a[i]);
  }
  while(n){
    printf("Press 1: for ASCENDING ORDER\n");
    printf("Press 2: for DESCENDING ORDER\n");
    printf("Enter Your choice: ");
    scanf("%d",&ch);
    switch(ch)
    {
    case 1:
      for(i=0 ; i<n ; i++){
        for(j=i+1 ; j<n ; j++){
        if (a[i] > a[j])
        {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp; 
        }   
    }
  }
  printf("The number arranged in  order\n");
  for(i=0 ; i<n ; i++){
    printf("%d\n",a[i]);
  }
        break;
    case 2:
    for(i=0 ; i<n ; i++){
        for(j=i+1 ; j<n ; j++){
        if (a[i] < a[j])
        {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp; 
        }   
    }
  }
  printf("The number arranged in ascending order\n");
  for(i=0 ; i<n ; i++){
    printf("%d\n",a[i]);
  }
     break;
    default:
         printf("INVALID CHOICH !!");
        break;
    }
  }
  
    return 0;
}
