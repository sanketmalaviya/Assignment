#include <stdio.h>
#include <string.h>

struct Emp
{
    int id;
    char name[30];
    float sal;
};

int main()
{
    struct Emp e1 = {101, "tops", 1234.5};
    printf("%d %s %.2f\n", e1.id, e1.name, e1.sal);
    struct Emp e2;
    e2.sal = 234.56;
    e2.id = 102;
    strcpy(e2.name, "tech");
    printf("%d %s %.2f", e2.id, e2.name, e2.sal);

    return 0;
}