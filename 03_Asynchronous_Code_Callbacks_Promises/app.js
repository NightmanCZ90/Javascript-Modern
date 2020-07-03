const btn = document.querySelector('button');

// setTimeout(() => {
// 	btn.style.transform = `translateX(100px)`;
// 	setTimeout(() => {
// 		btn.style.transform = `translateX(200px)`;
// 		setTimeout(() => {
// 			btn.style.transform = `translateX(300px)`;
// 			setTimeout(() => {
// 				btn.style.transform = `translateX(400px)`;
// 				setTimeout(() => {
// 					btn.style.transform = `translateX(500px)`;
// 				}, 1000)
// 			}, 1000)
// 		}, 1000)
// 	}, 1000)
// }, 1000)

const moveX = (element, amount, delay, successCallback, failCallback) => {
	setTimeout(() => {
		const maxX = document.body.clientWidth;
		const dimensions = element.getBoundingClientRect();
		const currentRight = dimensions.x + dimensions.width;
		if(currentRight + amount > maxX) {
			failCallback();
		}
		else {
			element.style.transform = `translateX(${currentRight + amount}px)`;
			successCallback();
		}
	}, delay)
};

 moveX(btn, 100, 1000, () => {
	moveX(btn, 200, 1000, () => {
		moveX(btn, 300, 1000, () => {
			moveX(btn, 400, 1000, () => {
				moveX(btn, 500, 1000, () => {
					moveX(btn, 600, 1000);
				 });
			 });
		 });
	 });
 });

 