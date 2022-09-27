#include<stdio.h>
int main(){ 

int a[2][2], b[2][2];
int c[2][2];
int i,j,n,m,p,q,k,tol=0;

printf("Enter the number of rows and columns for first matrix:- ");
scanf("%d%d",&m, &n);

printf("Enter your first matrix element:- ");
 for(i=0 ; i<m ; i++){
    for(j=0 ; j<n ; j++){
          scanf("%d",&a[i][j]);
    }
 }
 
printf("Enter the number of rows and columns for second matrix:- ");
scanf("%d%d",&p, &q);

if(n != p){
    printf("Your given matrix cannot be multiplication with eich other..\n");
}

else{
    printf("Enter your second matrix element:- \n");
     for(i=0 ; i<p ; i++){
       for(j=0 ; j<q ; j++){
          scanf("%d",&b[i][j]);
       }
    }
}  
 for(i=0 ; c<m ; i++){
    for(j=0 ; j<q ; j++ ){
        for(k=0 ; k<p ; k++){
            tol = tol + a[i][k] * b[k][j]; 
        }
        c[i][j] = tol;
        tol=0;
    }
 }

 printf(" The result of matrix of multipulation is:\n");

 for(i=0 ; i<m ; i++){
    for(j=0 ; j<q ; j++){
      printf("%d\t", c[i][j]);
    }
      printf("\n");
 }
    return 0;
}