
const csv = "username, email, phone \n octavia,octavia@gmail.com, 099-83-44 \n clark, clark@gmail.com, 054-83-23 \n raven, raven@gmail.com, 784-44-98"

var array = csv.toString().split("\n");

let result = [];

let headers = array[0].split(",")

for (let i = 1; i < array.length - 1; i++) {
let obj = {}

let str = array[i]
let s = ''

let flag = 0
for (let ch of str) {
	if (ch === '"' && flag === 0) {
	flag = 1
	}
	else if (ch === '"' && flag == 1) flag = 0
	if (ch === ', ' && flag === 0) ch = '|'
	if (ch !== '"') s += ch
    
}

let properties = s.split("|")

for (let j in headers) {
	if (properties[j].includes(", ")) {
	obj[headers[j]] = properties[j]
		.split(", ").map(item => item.trim())
	}
	else obj[headers[j]] = properties[j]
}
console.log(obj);
// result.push(obj)
}


// let json = JSON.stringify(result);
// console.log('output.json', json);
