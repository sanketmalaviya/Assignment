#include <stdio.h>
int main()
{
    float p,rate,time,si;
    printf("Enter the princple amount:-  ");
    scanf("%f",&p);
    printf("Enter rate of insterst:-  ");
    scanf("%f",&rate);
    printf("Enter time period in year:-  ");
    scanf("%f",&time);
    si = p*rate*time/100;
    printf("Simple insterst is = %f",si);
    return 0;
}