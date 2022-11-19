/*  Write a program of structure for five employee that provides the following
    information -print and display empno, empname, address and age */


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

    struct Emp e2 = {102, "abc", 20, "surat"};
    printf("%d %s %d %s\n", e2.id, e2.name, e2.age, e2.add);

    struct Emp e3 = {103, "def", 22, "ahmedabad"};
    printf("%d %s %d %s\n", e3.id, e3.name, e3.age, e3.add);

    struct Emp e4 = {104, "ghi", 25, "ahmedabad"};
    printf("%d %s %d %s\n", e4.id, e4.name, e4.age, e4.add);

    struct Emp e5 = {105, "xyz", 20, "surat"};
    printf("%d %s %d %s\n", e5.id, e5.name, e5.age, e5.add);

    return 0;
}