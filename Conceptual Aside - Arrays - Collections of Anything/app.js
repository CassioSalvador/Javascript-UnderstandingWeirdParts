var arr = [
	1,
	false,
	{
		name: 'Joana',
		address: '111 Main St.',
	},
	function(name){
		var greeting = 'Hello ';
		console.log(greeting + name);
	},
	"hello"
];

console.log(arr);
arr[3](arr[2].name);