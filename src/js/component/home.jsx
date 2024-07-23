import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./Counter";


//create your first component
const Home = ({number1, number2,number3,number4,number5,number6}) => {
	return (
		<div className=" ">
			<Counter className="row" number1={number1} number2={number2} number3={number3} number4={number4}  number5={number5}  number6={number6}/>

		</div>
	);
};

export default Home;