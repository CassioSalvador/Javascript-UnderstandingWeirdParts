var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function(){

		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;

	}
}

var logName = function(lang1, lang2){

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('---------------------');

}

var logPersonName = logName.bind(person);

logPersonName('en');

logName.apply(person, ['en', 'es']);
logName.call(person, 'en', 'es');

(function(lang1, lang2){

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('---------------------');

}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
	firstname: 'Jane',
	lastname: 'Doe',
}

console.log(person.getFullName.call(person2));

// function currying
function multiply(a, b){
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));