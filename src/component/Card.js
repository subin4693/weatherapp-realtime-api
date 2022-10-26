import React,{useState, useEffect} from 'react';
import './Card.css';

const Card = () => {

	const api_key="4e082e91ec1caa4c9fabef0178025065"

	const[input,setInput] = useState("");
	const[inputDisplay, setInputDisplay] = useState("nagercoil");
	const[deg,setDeg] = useState();

	const handleChange = (e) => {
		setInput(e.target.value);
	}
	const handelSearch = (e) => {
		e.preventDefault();
		setInputDisplay(input);
	}
	const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputDisplay}&appid=${api_key}`;

	useEffect(()=>{
		fetch(url)
		.then(res=>res.json())
		.then(data=> setDeg(data.main.temp));
		setDeg(parseFloat(deg));
		setDeg(Math.abs(273.15-deg)+"");
		console.log(Math.abs(273.15-deg)+"");
		console.log(deg);


	},[])

	useEffect(()=>{
		fetch(url)
		.then(res=>res.json())
		.then(data=> setDeg(data.main.temp));
	},[inputDisplay])
	return(
		<div className="card">
			<div className="card__itemContainer">
				<form className="card__input" onSubmit={handelSearch}>
					<input type="text" onChange={handleChange} value={input}/>
				 	<button type="submit"> search </button>
				 </form>
				<h3 className="card__cityName"> {inputDisplay}</h3>
				<h4 className="card__day">date</h4>
				<div className="card__degContainer">
					<h1>{deg} c</h1>
				</div>
				<h2>clouds</h2>
			</div>
		</div>
	);	
}

export default Card;