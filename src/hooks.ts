import { Dispatch, SetStateAction, useState } from "react";

export function useJSONState<T>(initialValue: string): [T | undefined, string, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState(initialValue);
  const json = tryParse<T>(value);
  return [json, value, setValue];
}

function tryParse<T>(value: string): T | undefined {
  try {
    return JSON.parse(value);
  } catch (e) {
    return undefined;
  }
}
