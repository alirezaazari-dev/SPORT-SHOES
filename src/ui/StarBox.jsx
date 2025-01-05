import { useState } from "react";
import Star from "./Star";

function StarBox({ maxLength }) {
  const [rating, setRating] = useState(0);
  const [tempRate, setTempRate] = useState(0);

  function handleRating(rate) {
    setRating(rate);
  }

  return (
    <div className="flex gap-x-2 items-center">
      <div>
        {Array.from({ length: maxLength }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRate ? tempRate >= i + 1 : rating >= i + 1}
            onMouseIn={() => setTempRate(i + 1)}
            onMouseOut={() => setTempRate(0)}
          />
        ))}
      </div>
      <p>{tempRate || rating || ""}</p>
    </div>
  );
}

export default StarBox;
