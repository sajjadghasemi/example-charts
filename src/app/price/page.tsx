"use client";

import { useEffect, useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState({
    minEjare: 100,
    maxEjare: 200,
    minRahn: 1000,
    maxRahn: 1500,
  });
  const [final, setFinal] = useState({
    finalEjare: price.maxEjare,
    finalRahn: price.minRahn,
  });

  const diffRahn = (price.maxRahn - price.minRahn) / 200;
  const diffEjare = (price.maxEjare - price.minEjare) / 200;
  useEffect(() => {
    setFinal({
      finalRahn: price.minRahn + diffRahn * value,
      finalEjare: price.maxEjare - diffEjare * value,
    });
  }, [value]);

  return (
    <div className="m-12">
      <div className="border-2 p-8 m-8 flex justify-between">
        <div>
          <p>min ejare: {price.maxEjare}</p>
          <p>max rahn: {price.minRahn}</p>
        </div>
        <div>
          <p>min ejare: {price.minEjare}</p>
          <p>max rahn: {price.maxRahn}</p>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={200}
        step={1}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
      <div className="border-2 p-8 m-8 flex justify-between">
        <p> ejare: {final.finalEjare}</p>
        <p> rahn: {final.finalRahn}</p>
      </div>
    </div>
  );
};

export default page;
