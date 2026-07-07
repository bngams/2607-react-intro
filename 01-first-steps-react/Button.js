const privateVariable = 'I am private';

///export const publicVariable = 'I am public';

function MyButton() {
  // useState(0) => [ dynamicValueRef, setDynamicValue ]
  const [ count, setCount ] = useState(0);
  console.log(count);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>You clicked { count } times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}

export default MyButton;

// export {
//     publicVariable,
//     MyButton
// }
