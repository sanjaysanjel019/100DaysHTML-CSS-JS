let counts = document.querySelectorAll('.count');
console.log('Data is loaded');

counts.forEach((count) => {
	const updateCounts = () => {
		let currentCount = parseInt(count.innerText);
		let targetCount = count.getAttribute('data-target');
		let increaseSpeed = 30;
		let increaseCount = parseInt(targetCount / increaseSpeed);

		if (currentCount < targetCount) {
			count.innerText = currentCount + increaseCount;
		} else {
			count.innerText = targetCount;
		}
		setTimeout(updateCounts, increaseSpeed);
	};
	updateCounts();
});
