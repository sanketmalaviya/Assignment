// Write a Program of Two 1D Matrix Addition using Operator Overloading 

#include<iostream>
using namespace std;

class matrix{
        int a[2][2];
        public:
        void display(){
                for(int i=0 ; i<2; i++){
                        for(int j=0 ; j<2 ; j++){
                                cout<<a[i][j]<<"\t";
                        }
                        cout<<"\n";
                }
        }
        void operator +(matrix x){
                int mat[2][2];
                for(int i=0 ; i<2 ; i++){
                        for(int j=0 ; j<2; j++){
                            mat[i][j]=a[i][j]+x.a[i][j];
                        }
                }
        }
};

int main(){
        matrix m(1,2,3,4),n(1,2,3,4);
        matrix o=m+n;
        o.display();
}

