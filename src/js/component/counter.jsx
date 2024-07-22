import React, { useState, useEffect } from "react";

const Counter = () => {
  let arr = [0, 0, 0, 0, 0, 0];
  const [counters, setCounters] = useState(arr);

  useEffect(() => {
    const incrementCounters = (counters, index = 0) => {
      if (index < counters.length) {
        if (counters[index] < 9) {
          counters[index] += 1;
        } else {
          counters[index] = 0;
          incrementCounters(counters, index + 1);
        }
      }
    };

    const interval = setInterval(() => {
      setCounters(prevCounters => {
        const newCounters = [...prevCounters];
        incrementCounters(newCounters);
        return newCounters;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="display-3">
            <i className="fas fa-clock"></i>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {counters.map((counter, index) => (
          <div key={index} className="col-auto">
            <div className="display-3">
              {counter}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;