const btn = document.querySelector('button');

// // setTimeout(() => {
// // 	btn.style.transform = `translateX(100px)`;
// // 	setTimeout(() => {
// // 		btn.style.transform = `translateX(200px)`;
// // 		setTimeout(() => {
// // 			btn.style.transform = `translateX(300px)`;
// // 			setTimeout(() => {
// // 				btn.style.transform = `translateX(400px)`;
// // 				setTimeout(() => {
// // 					btn.style.transform = `translateX(500px)`;
// // 				}, 1000)
// // 			}, 1000)
// // 		}, 1000)
// // 	}, 1000)
// // }, 1000)

// const moveX = (element, amount, delay, successCallback, failCallback) => {
// 	setTimeout(() => {
// 		const maxX = document.body.clientWidth;
// 		const dimensions = element.getBoundingClientRect();
// 		const currentRight = dimensions.x + dimensions.width;
// 		if(currentRight + amount > maxX) {
// 			failCallback();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currentRight + amount}px)`;
// 			successCallback();
// 		}
// 	}, delay)
// };

//  moveX(btn, 100, 1000, () => {
// 	moveX(btn, 200, 1000, () => {
// 		moveX(btn, 300, 1000, () => {
// 			moveX(btn, 400, 1000, () => {
// 				moveX(btn, 500, 1000, () => {
// 					moveX(btn, 600, 1000);
// 				 });
// 			 });
// 		 });
// 	 });
//  });
// const makeDogPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand < .5) {
// 				resolve();
// 			}
// 			else {
// 				reject();
// 			}
// 		}, 5000)
// 	});
// };
// makeDogPromise()
//  	.then(() => {
// 		console.log("YAY WE GOT A DOG")
// 	})
// 	.catch(() => {
// 		console.log("NOPE")
// 	})

// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 				const pages = {
// 					'/users': [
// 						{id: 1, username: "Bilbo"},
// 						{id: 5, username: "Esmeralda"}
// 					],
// 					'/users/1': {
// 						id				:	1,
// 						username	:	'Bilbo',
// 						upvotes		:	360,
// 						city			:	'Lisbon',
// 						topPostId	:	454321
// 					},
// 					'/users/5': {
// 						id				:	5,
// 						username	:	'Esmeralda',
// 						upvotes		:	571,
// 						city			:	'Honolulu'
// 					},
// 					'/posts/454321': {
// 						id				:	454321,
// 						title			:	'Ladies & Gentlemen, may I introduce my pet pig, Hamlet.',
// 					},
// 					'/about': 'This is the about page'
// 				};
// 				const data = pages[url];
// 				if(data) {
// 					resolve({status: 200, data});
// 				} else {
// 					reject({status: 404});
// 				}
// 		}, 1000)
// 	})
// };

// fakeRequest('/users').then((res) => {
// 	console.log(res)
// 	const id = res.data[0].id;
// 	return fakeRequest(`/users/${id}`)
// })
// .then((res) => {
// 	console.log(res)
// 	const postId = res.data.topPostId;
// 	return fakeRequest(`/posts/${postId}`)
// })	
// .then((res) => {
// 	console.log(res.data.title)
// })
// .catch((err) => {
// 	console.log("OH NO", err)
// })
// .catch((res) => {
// 	console.log(res.status, res.name);
// 	console.log("REJECTED")
// });
// fakeRequest('/dogs')
// .then((res) => {
// 	console.log("Status code", res.status)
// 	console.log("Status code", res.data)
// 	console.log("WORKED");
// })
// .catch((res) => {
// 	console.log(res.status, res.name);
// 	console.log("REJECTED")
// })

// btn.addEventListener("onclick", fakeRequest());

// moveX(btn, 300, 1000).then(() => {return moveX(btn, 300, 1000)})
// .then(() => moveX(btn, 300, 1000))
// .then(() => moveX(btn, 300, 1000))
// .then(() => moveX(btn, 300, 1000))
// .then(() => moveX(btn, 300, 1000))
// .then(() => moveX(btn, 300, 1000))
// .then(() => {console.log("DONE MOVING")})
// .catch(() => {console.log("NOT ENOUGH SPACE")})

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
// 	return axios.get(url);
// }
// const printPlanets = ({ data }) => {
// 	console.log(data);
// 	for(let planet of data.results) {
// 		console.log(planet.name)
// 	}
// 	return Promise.resolve(data.next);
// }
// fetchNextPlanets()
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log("In Catch Callback!")
// 		console.log(err)
// 	})

// async function getData() {
// 	const data = axios.get('https://swapi.dev/api/planets/');
// 	console.log(data);
// }

// async function greet() {
// 	return "Hello"
// }
// greet().then((val) => {
// 	console.log("promise :", val)
// })

// async function add(x,y) {
// 	if(typeof x !== 'number' || typeof y !== 'number') {
// 		throw 'X and Y must be numbers'
// 	}
// 	return x + y;
// }

// add('e','r').then(val => {
// 	console.log(val)
// }).catch(err => {
// 	console.log(err)
// })

// function getPlanets() {
// 	return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res) => {
// 	console.log(res.data)
// })

// async function getPlanets() {
// 	try {
// 		const res = await axios.get('https://swapi.dev/api/plaawdnets/');
// 		console.log(res.data)
// 	}	catch(e) {
// 		console.log("in catch")
// 		console.log(e)
// 	}
// }
// getPlanets();

//   'pokeapi.co/api/v2/pokemon'

// SEQUENTIAL REQUEST !!
async function get3Pokemon() {
	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(poke1.data.name);
	console.log(poke2.data.name);
	console.log(poke3.data.name);
}

// PARALLEL REQUEST !!
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	// const poke1 = await prom1;
	// const poke2 = await prom2;
	// const poke3 = await prom3;
	const results = await Promise.all([prom1, prom2, prom3]);
	// console.log(poke1.data.name);
	// console.log(poke2.data.name);
	// console.log(poke3.data.name);
	console.log(results);
	for(let pokemon of results) {
		console.log(pokemon.data.name)
	}
}

get3Pokemon();

// function changeBodyColor(color, delay) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = color;
// 			resolve();
// 		}, delay)
// 	})
// }

// async function lightShow() {
// 	await changeBodyColor('teal', 1000);
// 	await changeBodyColor('pink', 1000);
// 	await changeBodyColor('indigo', 1000);
// 	await changeBodyColor('violet', 1000);
// }
// async function lightShow() {
// 	const p1 = changeBodyColor('teal', 1000);
// 	const p2 = changeBodyColor('pink', 1000);
// 	const p3 = changeBodyColor('indigo', 1000);
// 	const p4 = changeBodyColor('violet', 1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

// lightShow();
