//WAP Find out length of string without using inbuilt function


  #include<stdio.h>
int main()
{
    char str[30];
   
    printf("Enter the String:");
    scanf("%s",str);
    int len=0;
    
    while(str[len]!='\0')
    {
        len++;
    }

    printf("Your Enter String length is:%d",len);

    return 0;
}