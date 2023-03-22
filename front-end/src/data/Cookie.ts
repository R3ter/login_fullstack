import Cookies from "universal-cookie";

const cookies = new Cookies(document.cookie);

export const getCookie = (name: string) => {
  return cookies.get(name);
};
export const setCookie = (name: string, value: string) => {
  console.log(name);
  cookies.set(name, value, {
    httpOnly: true,
    path: "/",
  });
};
export const removeCookie = (name: string) => {
  cookies.remove(name);
};
