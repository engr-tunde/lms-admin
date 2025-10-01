import { useEffect } from "react";
import { toast } from "react-toastify";

export const successNotification = (message) => toast.success(message);
export const errorNotification = (message) => toast.error(message);
export const infoNotification = (message) => toast.info(message);

export const formatter = (amount) => {
  const fm = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return fm.format(amount);
};

export const compactFormatter = (amount) => {
  const fm = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact", // 👈 key part
    maximumFractionDigits: 1, // "$1.2M" instead of "$1.234M"
  });
  return fm.format(amount);
};

export const dateFormatter = (date) => {
  var dateString = new Date(date).toString();
  // console.log({ dateString });
  var splittedDateString = dateString.split(" ");
  var day = splittedDateString[0];
  var day2 = splittedDateString[1];
  var month = splittedDateString[2];
  var year = splittedDateString[3];
  var formatttedDate = `${day}, ${day2} ${month}, ${year}`;
  return formatttedDate;
};
export const dateTimeFormatter = (date) => {
  var dateString = new Date(date).toString();
  // console.log({ dateString });
  var splittedDateString = dateString.split(" ");
  var day = splittedDateString[0];
  var day2 = splittedDateString[1];
  var month = splittedDateString[2];
  var year = splittedDateString[3];
  var time = splittedDateString[4];
  var formatttedDate = `${day} ${day2} ${month} ${year}, ${time}`;
  return formatttedDate;
};

export const shuffleArray = (array) => {
  if (array) {
    const newArr = array.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  } else {
    return [];
  }
};

export const copyFunc = (txt, title) => {
  const input = document.createElement("input");
  input.value = txt;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  let sNotification = (message) => toast.success(message);
  sNotification(title);
};

export const toDecimal = (num, decimal) => {
  let result = num && parseFloat(num.toFixed(decimal));
  return result;
};

export const useOutsideClick = (ref, onClickOut) => {
  useEffect(() => {
    const onCLick = (target) => !ref?.contains(target) && onClickOut?.();
    document.addEventListener("click", onCLick);
    return () => document.removeEventListener("click", onCLick);
  }, []);
};
