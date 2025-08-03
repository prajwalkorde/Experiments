#include<iostream>
using namespace std;

int main()
{
    int data[] = {5, 2, 9, 1, 50, 6};    
    int i, j, temp;
    for(i = 0; i < 6; i++) {
        for(j = 0; j < 6 - i - 1; j++) {
            if(data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    for (i = 0; i < 6; i++)
    {
        cout << data[i] << " ";
    }
    cout << endl;
    return 0;
}