/*Assume a class cricketer is declared. Declare a derived class batsman from
cricketer. Data member of batsman. Total runs, Average runs and best
performance. Member functions input data, calculate average runs, Display
data. (Single Inheritance) */

#include<iostream>
using namespace std;

class cricketer{
     protected:
     string bname;
     int ing,nout,runs;
       
     public:
     void setData(string bname, int ing, int nout, int runs){
        this->bname=bname;
        this->ing=ing;
        this->nout=nout;
        this->runs=runs;
    
     }
};

class bastman : public cricketer{
        protected:
       public:
       void run(){
           cout<<" Name of the Bastman " <<bname<<endl;
           cout<<" Total Runs of the Bastman "<<runs<<endl;
           cout<<" Total Number innings of the Bastman "<<ing<<endl;
           cout<<" Total Not Out of the Bastman "<<nout<<endl;
           cout<<" Total Average of the Bastman "<<runs/(ing-nout)<<endl;
            
       }
};


int main(){

    bastman b1;
    b1.setData("sanket",10,2,649);
    b1.run();
    return 0;

}

