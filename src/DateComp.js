import { useEffect, useState } from "react";

const DateComp = () => {
  const [currDate, setCurrDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div>
        Date: {currDate.getMonth}-{currDate.getDate}-{currDate.getFullYear}
      </div>
      <div>
        Time: {currDate.getHours}:{currDate.getMinutes}:{currDate.getSeconds}
      </div>
    </>
  );
};

export default DateComp;
