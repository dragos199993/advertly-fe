export function getLocalStorage<ReturnTypeGeneric, DefaultReturn>(
  key: string,
  defaultReturn: DefaultReturn
): ReturnTypeGeneric | DefaultReturn {
  const value: null | string = localStorage.getItem(key);
  if (!value) {
    return defaultReturn;
  }

  return JSON.parse(value);
}
