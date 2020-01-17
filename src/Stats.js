import React from 'react';
import App from './App.js';
import style from './App.module.css';

function Stats({ numbers }){
	const uniqueNumList = numbers.reduce((acc, num) => {
		if(!acc.includes(num)){
			acc.push(num)
		}
		return acc;
	}, [])
	return (<div id = {style.statBox}>You have { uniqueNumList.length } unique numbers.</div>)
}

export default Stats;