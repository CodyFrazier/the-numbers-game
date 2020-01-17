import React from 'react';
import App from './App.js';
import style from './App.module.css';

function Numbers(numbers){
	return (
		<div id = { style.numBox }>
			<h3>All Numbers ({ numbers.numbers.length })</h3>
			<ul className = { style.list }>{ numbers.numbers.map((num, idx) => { return ( <li key = { idx }>{ num }</li> )}) }</ul>
			<h3>Odd Numbers ({ numbers.numbers.filter(num => num % 2).length })</h3>
			<ul className = { style.list }>{ numbers.numbers.filter(num => { return num % 2 }).map((num, idx) => { return ( <li key = { idx }>{ num }</li> )}) }</ul>
			<h3>Even Numbers ({ numbers.numbers.filter(num => !(num % 2)).length })</h3>
			<ul className = { style.list }>{ numbers.numbers.filter(num => { return !(num % 2) }).map((num, idx) => { return ( <li key = { idx }>{ num }</li> )}) }</ul>
		</div>)
}

export default Numbers;