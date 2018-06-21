function Person(firstname, lastname){
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('This function is invoked.');
	// if nothing is returned and the "new" keyword was used, then it will return
	// this new object
}

Person.prototype.getFullName = function(){
	return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe'); 
// the "new" operator changes where "this" is pointing to the new object 
// by using the "new" operator, we are setting the new "john" object prototype (__proto__)
// to Person.prototype ("prototype" is a property of Person, not its own __proto__) 
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function(){
	return this.lastname + ' ' + this.firstname;
}