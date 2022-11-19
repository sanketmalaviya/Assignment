/*Write a program of structure employee that provides the following information 
  print and display empno, empname, address and age*/


#include <stdio.h>

struct Emp
{
    int id;
    char name[30];
    int age;
    char add[100];

};

int main()
{
    struct Emp e1 = {101, "sanket", 21 ,"surat"};
    printf("%d %s %d %s\n", e1.id, e1.name, e1.age, e1.add);

    return 0;
}