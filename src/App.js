import React, { useState } from 'react';
import style from './App.module.css';
import Numbers from './Numbers.js';
import Stats from './Stats.js';

function App() {
	
	const [numList, setNumbers] = useState([]);
	const getNumber = () => {
		if(numList.length < 56){
			setNumbers([...numList, Math.ceil(Math.random() * 10)])
		}
		
	}
	
	console.log(numList);
	return (
		<div className={style.App}>
			<h1>The Numbers Game</h1>
			<button onClick = {getNumber}>Add Number</button>
			<Stats numbers = { numList }/>			
			<Numbers numbers = { numList }/>
		</div>
	);
}

export default App;
