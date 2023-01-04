#include<iostream>
using namespace std;

int main(){

    int a[10][10], b[10][10], mul[10][10],r1,c1,r2,c2;
    
    cout<<"Enter the Rows and Columns for first Matrix: ";
    cin>>r1 >> c1;
    cout<<"Enter the Rows and Columns for second Matrix: ";
    cin>>r2 >> c2;

    while(c1!=r2){
        cout<< "Error Column of first matrix is not equle to row of second";

        cout<<"Enter the Rows and Columns for first Matrix: ";
        cin>>r1 >> c1;
        cout<<"Enter the Rows and Columns for second Matrix: ";
        cin>>r2 >> c2;
    }

    cout<< endl << "Enter Element of First Matrix 1:"<<endl;

      for(int i=0; i < r1; i++){
        for(int j=0; j <c1; j++){
            cout<<"Enter Element  a"<<i + 1 <<j + 1<<" :";
            cin>>a[i][j];
        }
      } 

      for(int i=0; i < r2; i++){
        for(int j=0; j< c2; j++){
            cout<<"Enter Element b"<<i + 1 <<j + 1<<" :";
            cin>>b[i][j];
        }
      }

      for(int i = 0; i < r1; ++i){
        for(int j = 0; j < c2; ++j)
        {
            mult[i][j]=0;
        }
}
    
    for(int i = 0; i < r1; ++i){
        for(int j = 0; j < c2; ++j){
            for(int k = 0; k < c1; ++k)
            {
                mult[i][j] += a[i][k] * b[k][j];
            }
        }
    }
   
    cout << endl << "Output Matrix: " << endl;
    for(int i = 0; i < r1; ++i){
        for(int j = 0; j < c2; ++j)
        {
            cout << " " << mult[i][j];
            if(j == c2-1)
            cout << endl;
        }
    }
    return 0;
}
