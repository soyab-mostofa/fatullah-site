import React from "react";

const CardCounter = ({ number }) => {
  const [num, setNum] = React.useState(0);
  React.useState(() => {
    for (let i = 0; i < number; i++) {
      setTimeout(() => {
        setNum((num) => (num += 1));
      }, 500);
    }
  }, []);

  return <p className="text-2xl font-light">{num}</p>;
};

export default CardCounter;
