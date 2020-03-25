import fetch from 'node-fetch';

export const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};
