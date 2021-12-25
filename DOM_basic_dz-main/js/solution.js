const ulEl = document.querySelector("#ulId")

function logAttributes(element) {

	let attributesNames = [];
	let attributesVal = [];
	const attributes = element.getAttributeNames()


	for (let elem of attributes) {
		attributesNames.push(elem)
		attributesVal.push(element.getAttribute(`${elem}`));
	}


	console.log(attributesNames);
	console.log(attributesVal);

	ulEl.lastElementChild.innerHTML = "Hello, my name's Peter Parker!";
	ulEl.firstElementChild.setAttribute("data-my-name", "Peter Parker")
	ulEl.removeAttribute("data-dog-tail");
}


logAttributes(ulEl);


//=====================================================================================================


function generateList(array, whereToInsert = document.body) {
	let ul = document.createElement('ul');
	for (let i = 0; i < array.length; i++) {

		if (!Array.isArray(array[i])) {
			let li = document.createElement('li');
			li.innerHTML = `${array[i]}`;
			whereToInsert.append(ul);
			ul.append(li)
		} else {
			let li = document.createElement('li');
			ul.append(li)
			generateList(array[i], li)
		}
	}

}


generateList([1, 2, [1.1, [1.1, 1.2, 1.3], 1.2, 1.3], 3])

//===================================================================================================


function createTable(a, b) {

	let table = document.createElement('table');
	document.body.append(table);

	for (let i = 1; i <= a; i++) {
		let tr = document.createElement("tr");
		table.append(tr);
		for (let j = 1; j <= b; j++) {
			let td = document.createElement("td");
			td.innerHTML = i * 10 + j - 10
			tr.append(td);
		}
	}


}

createTable(10, 10)