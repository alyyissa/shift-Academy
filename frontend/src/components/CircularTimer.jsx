import React, { useEffect, useState } from "react";

const CircularTimer = ({minutes}) => {
  const totalSeconds = minutes * 60; // 10 minutes
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const mins = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${mins}:${seconds.toString().padStart(2, "0")}`;

  const progressDeg = ((totalSeconds - secondsLeft) / totalSeconds) * 360;

  return (
    <div
      className="relative mx-auto grid aspect-square size-40 place-content-center rounded-full mt-10
      before:absolute before:bottom-[50px] before:left-1/2 before:-translate-x-1/2 before:text-[#797979] before:content-[attr(data-content)]
      after:flex after:aspect-square after:size-[148px] after:justify-center after:rounded-full after:bg-white 
      after:pt-12 after:text-3xl after:font-semibold after:tabular-nums after:content-[attr(data-progress)] transition-all duration-500"
      data-progress={formattedTime}
      data-content="01/11"
      style={{
        background: `conic-gradient(rgb(236, 236, 236) ${360 - progressDeg}deg, rgb(254, 132, 61) 0deg)`
      }}
    ></div>
  );
};

export default CircularTimer;
