/* Define a class to represent a bank account. Include the following members: 
1. Data Member: 
-Name of the depositor 
-Account Number 
-Type of Account 
-Balance amount in the account 
2. Member Functions 
-To assign values 
-To deposited an amount 
-To withdraw an amount after checking balance 
-To display name and balance  */

#include<iostream>
using namespace std;


class bank
{
        int acno;
        string name, acctype;
        float bal;  
        public:
        bank(int accno, string name, string acctype, float bal)  
        {
               this->acno=acno;
               this->name=name;
               this->acctype=acctype;
               this->bal=bal;
        }
        void deposit(){
        int n;
        cout<<"\n Enter Deposit Amount = ";
        cin>>n;
        bal+=n;
}
        void withdraw(){
        int m;
        cout<<"\n Enter Withdraw Amount = ";
        cin>>m;
        if(m>bal)
                cout<<"\n Cannot Withdraw Amount";
        bal-=m;
}
        void display(){
        cout<<"\n ----------------------";
        cout<<"\n Accout No. : "<<acno;
        cout<<"\n Name : "<<name;
        cout<<"\n Account Type : "<<acctype;
        cout<<"\n Balance : "<<bal;  
}
};

int main()
{
        int acc_no;
        string name, acc_type;
        float balance;
        cout<<"\n Enter Details: \n";
        cout<<"-----------------------";
        cout<<"\n Accout No. ";
        cin>>acc_no;
        cout<<"\n Name : ";
        cin>>name;
        cout<<"\n Account Type : ";
        cin>>acc_type;
        cout<<"\n Balance : ";
        cin>>balance;
  
        bank b1(acc_no, name, acc_type, balance);  
        b1.deposit(); 
        b1.withdraw(); 
        b1.display(); 
        return 0;
}