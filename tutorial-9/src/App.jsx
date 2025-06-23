import { useCallback, useMemo, useState } from "react"
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";
import LayoutOne from "./components/layoutOne";
import LayoutTwo from "./components/layoutTwo";


function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
      setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
      setCount2((prevCount) => prevCount + 5);
    }, []);


    const isEven = useMemo(() => {
      let i = 0;
      while(i<= 1000000000) i+=1;

      return count1 % 2 === 0;
    }, [count1]);

    

  return (
    <>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={incrementByOne}>Increment By 1 </Button>
      <hr />
      {isEven ? "Counter 1 is even" : "Counter 1 is Odd"}
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By 5</Button>
      <hr />
      <LayoutOne />
      <LayoutTwo />
    </>
  )
}

export default App


