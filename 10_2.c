#include<stdio.h>
int main(){
    char b;
    printf("Enter a character: ");
    scanf("%c",&b);
    if(b == 'a' || b == 'e' || b == 'i' || b == 'o' || b == 'u' || b == 'A' || b == 'E' || b == 'I' || b == 'O' || b == 'U' ){
        printf("%c is vowel character:",b);
    }
    else{
         printf("%c is not vowel character",b);
    }
    return 0;
