/*#include<stdio.h>

int main()
{
    int n,i,j;
    printf("enter the number:  ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}*/


#include<stdio.h>

int main()
{
    int n=5,i,j,k;
    for(i=1;i<=n;i++){
        for(k=1;k<=n-i;k++){
            printf(" ");
        }
        for(j=1;j<=i;j++){
            if(j==1||j==i||(j==3&&i==5)){
                printf("* ");
            }
            else{
                printf("  ");
            }
        }
        printf("\n");
    }
    for(i=1;i<=n;i++){
        for(k=1;k<=i;k++){
            printf(" ");
        }
        for(j=1;j<=n-i;j++){
           //if(j==1||j==n-i){
                printf("* ");
            //}
            ///else{
        // printf("  ");
           // }
       // }
        printf("\n");
    }
    return 0;
}