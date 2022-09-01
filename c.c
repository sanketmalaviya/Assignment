//WAP to find area of circle, rectangle and triangle

/*#include<stdio.h>

int main(){
   int choice;
   printf("1 for finding area of Circle\n");
   printf("2 for finding area of Rectangle\n");
   printf("3 to find area of Triangle\n ");
   scanf("%d",&choice);
   switch(choice) {
      
      case 1: {
         float pi=3.14159,radius,area;
         printf("Enter Radius of Circle\n");
         scanf("%f",&radius);
         area=(float)pi*radius*radius;
         printf("Area of Circle %f\n",area);
         break;
      }
      case 2: {
         float len,breadth,area;
         printf("Enter Length and Breadth of Rectangle\n");
         scanf("%f %f",&len,&breadth);
         area=(float)len*breadth;
         printf("Area of Rectangle is %f\n",area);
         break;
      }
      case 3: {
         int a,b,c;
         float s,area;
         printf("Enter sides of triangle\n");
         scanf("%d%d %d",&a,&b,&c);
         s=(float)(a+b+c)/2;
         area=(float)(sqrt(s*(s-a)*(s-b)*(s-c)));
         printf("Area of Triangle is %f\n",area);
         break;
      }
      default: {
         printf("Invalid Choice\n");
         break;
      }
   }
}*/



#include<stdio.h>
#include<math.h>
int main(){
    float pi=3.14159,radius,area,len,breadth,rarea,s,tarea;
    int a,b,c;
   
   
   
   
         printf("1 for finding area of Circle\n");
         printf("Enter Radius of Circle\n");
         scanf("%f",&radius);
         area=(float)pi*radius*radius;
         printf("Area of Circle %f\n",area);
         
         printf("------------------------------------\n");

         printf("2 for finding area of Rectangle\n");
         printf("Enter Length and Breadth of Rectangle\n");
         scanf("%f %f",&len,&breadth);
         rarea=(float)len*breadth;
         printf("Area of Rectangle is %f\n",rarea);
         
         printf("--------------------------------------\n");
         
         printf("3 to find area of Triangle\n ");
         printf("Enter sides of triangle\n");
         scanf("%d%d %d",&a,&b,&c);
         s=(float)(a+b+c)/2;
         tarea=(float)(sqrt(s*(s-a)*(s-b)*(s-c)));
         printf("Area of Triangle is %f\n",tarea);
return 0;
}