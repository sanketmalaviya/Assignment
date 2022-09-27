#include<stdio.h>

int main()
{
 char a[20] = "TOps TEch";
   for(int i=0 ; a[i]!='\0' ; i++){
       if(a[i]>='A' && a[i]<='Z'){
        a[i]  =  a[i]+32;
       }
   }
   printf("String in Lowercase is %s",a);
    for(int i=0 ; a[i]!='\0' ; i++){
       if(a[i]>='a' && a[i]<='z'){
        a[i]  =  a[i]-32;
       }
   }
    printf("\nString in Upercase is %s",a);
    return 0;
}