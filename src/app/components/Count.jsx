"use client";

import { useStore } from "../store/state";

const Count = () => {
  const setCount = useStore((state) => state.setCount);
  return (
    <section>
      <button onClick={setCount}>Increment</button>
    </section>
  );
};

// const CounterControl = () => {
//   const setCount = useCounter((state) => state.incrCounter);

//   return (
//     <div>
//       <button onClick={incrCounter}>Incr. Counter</button>
//     </div>
//   );
// };

export default Count;