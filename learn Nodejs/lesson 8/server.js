var myModule=require('./my_module.js');
console.log('hello ',myModule.hello());
console.log('local: ',myModule.localVar);
console.log('hello again:',myModule.helloWorld())
console.log('my number: '+myModule.increment(10))
