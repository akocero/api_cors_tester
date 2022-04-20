console.log("game");

// fetch("https://hxh-api.herokuapp.com/api/characters")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((err) => {
// 		console.log(err);
// 	});

// async function postData(url = "", data = {}) {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: "POST", // *GET, POST, PUT, DELETE, etc.
// 		//mode: "cors", // no-cors, *cors, same-origin
// 		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// 		credentials: "same-origin", // include, *same-origin, omit
// 		headers: {
// 			"Content-Type": "application/json",
// 			// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		redirect: "follow", // manual, *follow, error
// 		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// 		body: JSON.stringify(data), // body data type must match "Content-Type" header
// 	});
// 	return response.json(); // parses JSON response into native JavaScript objects
// }

// const body = {
// 	name: "Beyond Neteross",
// 	nen_type: "enhancement",
// 	abilities: ["100-Type Guanyin Bodhisattva"],
// 	japanese_name: "アイザック゠ネテロ",
// 	affiliations: ["Hunter Association"],
// 	gender: "male",
// 	state: "alive",
// 	profession: ["hunter"],
// 	relatives: ["625e7b11429ca08a608fca84"],
// };
// postData("https://hxh-api.herokuapp.com/api/characters", body).then((data) => {
// 	console.log(data); // JSON data parsed by `data.json()` call
// });
