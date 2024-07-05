import React from "react";

export function SimpleCounter({ seconds, startCounter, stopCounter, resetCounter }) {
  let digit1 = Math.floor(seconds / 10000);
  let digit2 = Math.floor(seconds / 1000);
  let digit3 = Math.floor(seconds / 100) % 10;
  let digit4 = Math.floor(seconds / 10) % 10;
  let digit5 = seconds % 10;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="bg-dark d-flex justify-content-center align-items-center text-white gap-4 p-4">
        <p className="border border-secondary border-2 m-0 p-2 fs-1 rounded bg-secondary"><i className="far fa-clock"></i></p>
        <p className="border border-secondary border-2 m-0 p-2 fs-1 rounded">{digit1}</p>
        <p className="border border-secondary border-2 m-0 p-2 fs-1 rounded">{digit2}</p>
        <p className="border border-secondary border-2 m-0 p-2 fs-1 rounded">{digit3}</p>
        <p className="border border-secondary border-2 m-0 p-2 fs-1 rounded">{digit4}</p>
        <p className="border border-secondary border-2 m-0 p-2 fs-1 rounded">{digit5}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary w-100" onClick={startCounter}>Start counter</button>
          </div>
          <div className="col-4">
            <button className="btn btn-secondary w-100" onClick={stopCounter}>Stop counter</button>
          </div>
          <div className="col-4">
            <button className="btn btn-danger w-100" onClick={resetCounter}>Reset counter</button>
          </div>
        </div>
      </div>

    </div>

  );
}