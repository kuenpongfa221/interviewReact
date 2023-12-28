import { useState } from "react";

function Question5() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>次數：{count}</p>
      <div className="button">
        <button onClick={() => setCount(count + 1)}>增加1次</button>
        <button onClick={() => setCount(count - 1)}>減少1次</button>
      </div>
    </div>
  );
}

export default Question5;
