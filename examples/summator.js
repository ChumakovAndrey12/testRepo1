'use strict'

const adder = (initial = 0) => ({
	value: initial,
	steps: [initial],
	add(value) {
		this.steps.push(value);
		this.value += value;
		return this;
	},
});

{
	const {value, steps} = adder(5).add(-8).add(10).add(4);
	console.log(value);
	const [...numbers] = steps;
	console.log(numbers);

}
