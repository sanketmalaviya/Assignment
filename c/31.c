//WAP of Addition, Subtraction, Multiplication and Division using Switch case.(Must Be Menu Driven)
 

 #include <stdio.h>
int main()
{
	int a, b, ch;

	printf("\n Enter two numbers:");
	scanf("%d%d", &a, &b);
		printf("\n Press 1 to add %d and %d", a, b);
		printf("\n Press 2 to subtract %d and %d", a, b);
		printf("\n Press 3 to multiply %d and %d", a, b);
		printf("\n Press 4 to divide %d and %d", a, b);
		printf("\n Enter Your Choice: ");
		scanf("%d", &ch);
		switch (ch)
		{
		case 1:
			printf("Sum: %d", a + b);
			break;
		case 2:
			printf("Subtract :%d", a - b);
			break;
		case 3:
			printf("Multiply :%d", a * b);
			break;
		case 4:
			printf("Divide :%d", a / b); 
			break;
		default:
			printf("Wrong choice!");
		}
	return 0;
}