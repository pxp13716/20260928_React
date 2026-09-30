import { useMemo } from "react";

export const useAverage = (list) => {
  const average = useMemo(() => {
    console.log('average...')
    if (list.length === 0) return 0;
    const total = list.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return (total / list.length).toFixed(2);
  }, [list])

  return average;
}