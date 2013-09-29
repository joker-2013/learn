#include <iostream>
int main(){
	std::cout << "enter two numbers :" << std::endl;
	int v1,v2;
	std::cin >> v1 >> v2 ;
	int lower,upper;
	if(v1 <= v2){
		lower = v1;
		upper = v2;
	}else{
		lower = v2;
		upper = v1;
	}	
	int sum = 0,val = lower;
	for(;val <= upper;val++){
		sum += val;
		std::cout << val;
		if((val - lower +1) % 10 == 0){
			std::cout << std::endl;
		}else{
			std::cout << " ";
		}
	}
	std::cout <<std::endl << "sum of " << lower << " to " << upper << " is " << sum << std::endl;
	return 0;
}