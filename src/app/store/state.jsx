import { create } from "zustand";

const useStore = create((set) => {
  return {
    counter: 0,
    setCount: () => set((state) => ({ count: state.count + 1 })),
  };
});


// const useCounter = create((set) => {
//     return {
//       counter: 0,
//       incrCounter: () => set((state) => ({ counter: state.counter + 1 })),
//     };
//   });
export default useStore;
