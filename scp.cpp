#include<iostream>
#include<algorithm>
using namespace std;
 
bool compare(int a, int b) {
    return a < b;
}

int main()
{
    int data[] = {5, 2, 9, 1, 50, 6};
    sort(data, data + 6, compare);    
    for(int i=0; i<6; i++) {
        cout << data[i] << " ";
    }
    return 0;
}