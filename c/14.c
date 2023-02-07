//. How many odd numbers are there 


#include<stdio.h>
int main(){
    int a[10],i;

    printf("Emter 10 number of Element:\n");
    for ( i = 0; i <10; i++)
    {
        scanf("%d",&a[i]);
    }
            
        printf("\n All odd Array Element are:\n");
        for (i = 0; i < 10; i++)
        {
           if(a[i]%2==1){
            printf("%d \n",a[i]);
           }
    
        
    }
    return 0;
}