#include <iostream>
#include "Sales_item.h"
int main(){
	//Sales_item book;
	//std::cout << "enter:" << std::endl;
	//std::cin >> book;
	//std::cout << book <<std::endl;
	Sales_item item1,item2;
	std::cout << "enter two items:" << std::endl;
	std::cin >> item1 >> item2;
	std::cout << item1 + item2 << std::endl;
	return 0;
}