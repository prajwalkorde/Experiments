#include <stdio.h>
int main(){
    int i,j,spaces,rows;
    rows = 5;
    for ( i = 0; i <= rows; i++)
    {
        for ( spaces = 0; spaces <= rows-i; spaces++)
        {
            printf(" ");
        }
        
        for (j=1; j<=(2*i-1); j++)
        {
            printf("*");
        }

        printf("\n");
    }
    
    return 0;
}