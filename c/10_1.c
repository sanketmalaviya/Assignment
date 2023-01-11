//1. Monday to Sunday using switch case

#include<stdio.h>
int main()
{
  int days;
  printf("please select the number between 1 to 7\n");
  printf("enter the number:-  ");
  scanf("%d",&days);
   switch (days)
   {
   case 1:
       printf("MOnday");   
      break;
   case 2:
       printf("Tuesday");   
      break;
   case 3:
       printf("Wendesday");   
      break;
   case 4:
       printf("Thuesday");   
      break;  
   case 5:
       printf("Friday");   
      break;
   case 6:
       printf("Satuerday");   
      break;
   case 7:
       printf("Sunday");   
      break;
   default:
   printf("DATA NOT FOUND!!!");
       break;
   }

    return 0;
}