//numbers like 9663 or 27 will generate a big graph, try if you want :)
const fs = require('fs')
var readline = require('readline');
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('-> ', (n) => {
fs.appendFileSync(__dirname+'/logs.txt','t:'+n.toString())
if(Number.isInteger(parseInt(n))){
var end_num = n;

var steps = 0;

const config = {
	"graph_decrease":end_num/2,
	"graph_char":"#",
	"formula_type":"+"
}

console.clear()

function graph(size){
	var start = []
	while (true) {
		if(size <= 0){
			return start.join().replaceAll(',','')
			break;
		}
		size -= config.graph_decrease
		start.push(config.graph_char)
	}
}

function mor(arr) {
  return Math.max.apply(Math, arr);
}

function check(arg){
	if(arg%2==1){return 'odd'}else{return 'even'}

}

var fp = []
var numlist = []

var oldn = 0;
var newn = 0;

while (true) {
	fp.push(graph(end_num)+`     [ ${end_num} (${check(end_num)})]`)
	numlist.push(end_num)
	if(config.formula_type == '+' && end_num==1|| config.formula_type == '-' && end_num==5){
		console.log(fp.join().replaceAll(',','\n'))
		console.log(`\nSteps: ${steps}\nBiggest Number: ${mor(numlist)} (${check(mor(numlist))})`)
		fs.appendFileSync(__dirname+'/logs.txt',' | finished:'+n.toString()+` | Steps: ${steps} | Biggest Number: ${mor(numlist)} (${check(mor(numlist))})\n`)
		break;
	}
	if (end_num%2==1){
		if(config.formula_type=='-'){
			steps+=1;
			end_num=end_num*3-1
		} else {
			steps+=1;
			end_num=end_num*3+1
		}
	} else if(end_num%2==0){
		steps+=1;
		end_num=end_num/2
	}

}
} else {
	console.log(n,'is not a number.')
}
});

