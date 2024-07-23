import React from "react";

const Card = ({ number1, number2, number3, number4, number5, number6 }) => {
    return (
        <div className="bg-dark ">
            <div className="container bg-dark  mt-5 p-3  d-flex justify-content-center">
                <div className="row row-cols-7 row-cols-lg-7 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3 border bg-dark rounded"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg></div>
                    </div>
                    
                    <div className="col">
                        <div className="p-3 border text-white bg-dark rounded">{number6}</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border text-white bg-dark rounded">{number5}</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border text-white bg-dark rounded ">{number4}</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border text-white bg-dark rounded">{number3}</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border text-white bg-dark rounded">{number2}</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border text-white bg-dark rounded">{number1}</div>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default Card;