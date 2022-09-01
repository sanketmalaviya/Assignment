#include<stdio.h>
float marks(){
    float maths=75 ,science= 65 , english=78;
    return maths + science +  english;
}

int main(){
    float per;
   
    printf("TOtal Marks of All Subject: %f\n",marks());
     per = (marks()/300) *100;
     printf("percentage = %f",per);
}    