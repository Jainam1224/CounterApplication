import { SetCounter } from "./SetCounter";
import { useCounter } from "./use-counter";

// This logic is without using bindActionCreators
// export const Counter = () => {
//   const incident = 'Incident';
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <main className="Counter">
//       <h1>Days Since Last {incident}</h1>
//       <p className="count">{count}</p>
//       <section className="controls">
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <button onClick={() => dispatch(set(0))}>Reset</button>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//       </section>
//       <SetCounter />
//     </main>
//   );
// };

// export default Counter;

// This logic is using bindActionCreators
export const Counter = () => {
  const incident = 'Incident';
  // const count = useSelector((state) => state.count);
  // Approach - 1
  // const dispatch = useDispatch();
  // const bindActions = bindActionCreators({ increment, decrement, set }, dispatch);

  // Approach - 2
  // const bindActions = useActions({ increment, decrement, set });

  // Approach - 3
  const { count, increment, decrement, set } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
