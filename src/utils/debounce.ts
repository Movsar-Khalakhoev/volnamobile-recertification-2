export function debounce<T extends Array<any>>(cb: (...args: T) => void, duration = 300) {
  let timeout: NodeJS.Timeout;

  return (...args: T) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), duration);
  };
}
