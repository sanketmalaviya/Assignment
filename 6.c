// WAP to convert years into days and days into years

#include<stdio.h>
int main()
{
  int num, ndays,year,week,days,day,nyear;
    
  
  printf("1: convert days into years\n");
  printf("2: convert years into days\n");
  scanf("%d",&num);
  switch (num)
  {
  case 1:

     printf("enter the number of days:-  ");
     scanf("%d",1&ndays);

     year = ndays / 365;
     week = (ndays%365) / 7;
     days = (ndays%365) % 7;

     printf(" days convert into year\n");
     printf("%d days is %d year, %d weeks and %d days\n",ndays,year,week,days);
    break;
  case 2:
    
      printf("enter the number of year");
      scanf("%d",&nyear);

      day = nyear*365;

      printf("years convert into days\n ");
      printf("%d years is %d days",nyear,day);
      break;
  default:
    printf("NOT FOUND:!!!!");
    break;
  }
    return 0;
}