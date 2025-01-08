#include <stdio.h>

int main() {

    int num = 0;

    printf("Enter a number (2-100) : ");
    scanf("%d", &num);


    for (int i = 1; i <= 12; i++) {
        printf("  %d x %-2d",num, i);

        // if (i >= 1 && i <= 9) {
        //     printf("  = %d", num * i);
        // } else {
        //     printf(" = %d", num * i);
        // }
        printf(" = %d", num * i);

        printf("\n");
    }
    // printf("test");

    return 0;
}