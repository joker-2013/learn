var localVar='local',number;
function hello(){
        return 'world';
}
function helloWorld(){
        return hello() + 'again';
}
function myPrivateFunction(number){
        return number +1 ;
}
function increment(number){
        return myPrivateFunction(number);
}
module.exports.hello=hello;
module.exports.helloWorld=helloWorld;
module.exports.increment=increment;
