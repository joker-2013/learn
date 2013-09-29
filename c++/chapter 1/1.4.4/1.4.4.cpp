#include <iostream>
int main(){
	int sum,val;
	std::cout << "enter numbers:" << std::endl;
	while(std::cin >> val){
		sum += val;
	}
	std::cout << "sum is " << sum << std::endl;
	return 0;
}