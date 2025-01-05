import { digitsEnToFa } from "@persian-tools/persian-tools";

export function changeEnToFaNumber(str) {
  return digitsEnToFa(String(str));
}

export function addCommas(str) {
  let result = "";
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (count === 3) {
      result += ",";
      count = 0;
    }
    result += str[i];
    count++;
  }
  return result.split("").reverse().join("").trim();
}
