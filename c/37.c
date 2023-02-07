//WAP to reverse a string and check that the string is palindrome or not

#include <stdio.h>
#include <string.h>

int main(){
	char str[100], rev[100];
	int a,b,temp;
	
	printf("Enter string: ");
	scanf("%s", &str);
	
	strcpy(rev,str);	
	
	a = 0;
	b = strlen(str) - 1;
	while(a < b){
		temp = str[a];
		str[a] = str[b];
		str[b] = temp;
		a++;
		b--;
	}
	
	printf("Reverse string: %s\n", str);
	
	if(strcmp(rev,str) == 0)
		printf("%s is palindrome!\n", str);
	else
		printf("%s is not palindrome!\n", str);
		
	return 0;
}