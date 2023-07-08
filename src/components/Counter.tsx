import { FC } from "react";

enum CounterAction {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  INCREASE_BY = "INCREASE_BY",
}

interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  numberButtons: number[];
}

const Counter: FC<Props> = (props) => {
  const { count, setCount, numberButtons } = props;

  const handleClick = (action: CounterAction, incrementQuantity?: number) => {
    setCount((prev) => {
      const previousCount = prev || 0
      switch (action) {
        case CounterAction.INCREASE:
          return previousCount + 1
        case CounterAction.DECREASE:
          return previousCount - 1
        case CounterAction.INCREASE_BY:
          return incrementQuantity ? previousCount + incrementQuantity : previousCount + 1;
        default:
          return previousCount;
      }
    });
  }

  return <>
    <div>
      {count}
      <br />
      {numberButtons.map((number) => (
        <button key={number} onClick={() => handleClick(CounterAction.INCREASE_BY, number)}>
          Increase By {number} <br />
        </button>
      ))
      }
    </div>
    <button onClick={() => handleClick(CounterAction.INCREASE)}>
      Increase
    </button>
    <button onClick={() => handleClick(CounterAction.INCREASE_BY, 10)}>
      Increase by 10
    </button>
    <button onClick={() => handleClick(CounterAction.DECREASE)}>
      Decrease
    </button>
  </>;
};

export default Counter;
