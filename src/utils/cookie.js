import Cookie from "js-cookie";

const setCookie = (name, value, expires) => {
  return Cookie.set(name, value, { expires: parseInt(expires) });
};

const getCookie = (name) => {
  return Cookie.get(name);
};

export { setCookie, getCookie };
