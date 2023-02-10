import { acessKey, BASE_URL } from "./api";

export const request = async (endpoint) => {
  const require = await fetch(`${BASE_URL}/${endpoint}/?client_id=${acessKey}`);
  return require.json();
};
