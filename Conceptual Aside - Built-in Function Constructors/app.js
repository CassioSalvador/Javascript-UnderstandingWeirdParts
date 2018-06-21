String.prototype.isLengthGreaterThan = function(limit){
	return this.length > limit;
}

console.log("John".isLengthGreaterThan(3)); // Javascript converts John (string primitive) to a String object

Number.prototype.isPositive = function(){
	return this > 0;
}

//console.log(3.isPositive()); // Javascripts DOES NOT conver 3 to a Number object

var a = new Number(3); // You must convert the primitive number to a Number object first
console.log(a.isPositive());