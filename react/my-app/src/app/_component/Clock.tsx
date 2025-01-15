"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<null | Date>(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return <div>현재 시간 : {time.toLocaleTimeString()}</div>;
}
