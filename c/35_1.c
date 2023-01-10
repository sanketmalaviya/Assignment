//WAP to make addition, of two matrix using 2-D Array

#include <stdio.h>
int main() {
  int n, m, a[10][10], b[10][10], sum[10][10], i, j;
  printf("Enter the number of rows : ");
  scanf("%d", &n);
  printf("Enter the number of columns : ");
  scanf("%d", &m);

  printf("\nEnter elements of 1st matrix:\n");
  for(i = 0;i<n;i++){
        for(j = 0;j<m;j++){
            printf("Enter the value of a[%d][%d] index position: ",i,j);
            scanf("%d",&a[i][j]);
        }
    }
  printf("Enter elements of 2nd matrix:\n");
  for(i = 0;i<n;i++){
        for(j = 0;j<m;j++){
             printf("Enter the value of a[%d][%d] index position: ",i,j);
             scanf("%d",&a[i][j]);
        }
    }

  for (i = 0; i < n ; i++){
    for (j = 0; j < m; j++) {
      sum[i][j] = a[i][j] + b[i][j];
      printf("%d\t",&sum[i][j]);
    }
  }

  printf("\nSum of two matrices: \n");
  for (i = 0; i < n; i++){
    for (j = 0; j < m; j++) {
      printf("%d\t", sum[i][j]);
    }   
        printf("\n\n");
      
    }

  return 0;
}

 