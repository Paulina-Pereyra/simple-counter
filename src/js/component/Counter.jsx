import React from "react";
import Card from "./Card";

const Counter = ({ number1, number2, number3, number4, number5, number6 }) => {

    return (
        <div className=" ">

            <Card number1={number1} number2={number2} number3={number3} number4={number4} number5={number5} number6={number6}  />

        </div>


    )
};
export default Counter;