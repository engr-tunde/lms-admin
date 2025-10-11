import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export const successNotification = (message) => toast.success(message);
export const errorNotification = (message) => toast.error(message);
export const infoNotification = (message) => toast.info(message);


export const capitalize = str => str ? str.charAt(0).toUpperCase() + str.slice(1) : "";


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
export const compactDateFormatter = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
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





export const useToggleOpen = (openIndex, setOpenIndex, index) => {
  const ref = useRef();
  const isOpen = openIndex === index;

  const toggle = () => setOpenIndex(isOpen ? null : index);
  const close = () => setOpenIndex(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref]);

  return { isOpen, toggle, close, ref };
};

export const getLastUpdatedText = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date; // difference in milliseconds
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return "Updated just now";
  if (diffMin < 2) return "Updated a min ago";
  if (diffMin < 60) return `Updated ${diffMin} mins ago`;
  if (diffHr < 2) return "Updated an hour ago";
  if (diffHr < 24) return `Updated ${diffHr} hrs ago`;
  if (diffDay === 1) return "Updated yesterday";
  return `Updated ${diffDay} days ago`;
}
