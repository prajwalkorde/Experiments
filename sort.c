#include<stdio.h>
int main() {
    int data[] = {5, 2, 9, 1, 5, 6};
    int i,temp,j;
    for (i = 0; i < 6; i++) {
        for (j=0; j < 6-i-1; j++) {
            if (data[j] > data[j+1]) {
                temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    for (i = 0; i < 6; i++) {
        printf("%d ", data[i]);
    }
    return 0;
}