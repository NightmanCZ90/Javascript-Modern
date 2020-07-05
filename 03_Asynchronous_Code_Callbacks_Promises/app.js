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

axios.get('https://swapi.dev/api/planets/').then((res) => {
	console.log(res.data);
}).catch((err) => {
	console.log("In Catch Callback!")
	console.log(err)
})