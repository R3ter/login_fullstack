import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookie = (name: string) => {
  console.log(cookies.getAll());
};
export const setCookie = (name: string, value: string) => {
  console.log(value);
  cookies.set(name, value, { httpOnly: true, });
};
export const removeCookie = (name: string) => {
  cookies.remove(name);
};
