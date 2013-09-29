#include <iostream>
int main(){
	std::cout << "enter two number :" << std::endl;
	int v1,v2,max;
	std::cin >> v1 >> v2;
	if(v1 >= v2){
		max = v1;
	}else{
		max = v2;
	}
	std::cout << "the max number of " << v1 << " and " << v2 << " is " << max << std::endl;
	return 0;
}