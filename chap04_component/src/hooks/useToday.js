import { useEffect, useState } from "react";

export const useToday = (num) => {
  const [today, setToday] = useState(new Date().toLocaleString());

  useEffect(() => {

    const timer = setTimeout(() => {
      setToday(new Date().toLocaleString());
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
  }, [num]);

  return today;
}