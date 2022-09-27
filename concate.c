#include<stdio.h>
#include<string.h>
int main(){
   char a[20] = "Hello";
   char b[20] = "world";
   int l1 = strlen(a);
   int l2 = strlen(b);
   for(int i=0 ; i<=11 + 12 ; i++)
   {
       a[11+i] = b[i];    
       a[i] = b[i];
   }
   printf("%s",a);
    return 0;
}