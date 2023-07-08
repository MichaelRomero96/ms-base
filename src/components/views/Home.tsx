import React, { useEffect, useState } from 'react'
import Counter from '../Counter';

const Home = () => {
	const [count, setCount] = useState<undefined | number>();
	const initialCount = 0;
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [numberButtons, setNumberButtons] = useState(numbers)

	useEffect(() => {
		setCount(0)
	}, [])

	return (
		<Counter count={count || initialCount} setCount={setCount} numberButtons={numberButtons} />
	)
}

export default Home