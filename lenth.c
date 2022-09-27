#include <stdio.h>

int main()
{
    char a[20] = "Hello World";
    int count = 0;
    for (int i = 0; a[i] != '\0'; i++)
    {
        if (a[i] == ' ')
        {
            count++;
            continue;
        }
    }
    printf("Lenth of the string is %d ", count);
    return 0;
}