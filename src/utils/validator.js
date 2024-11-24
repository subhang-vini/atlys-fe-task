const allowedChars = ["+", "-", "*", "/", "X", "x", "^"];

export default (string) => {
  const stringArr = string.split("");
  let error = null;
  const result = stringArr.reduce((acc, char) => {
    if (char === " ") {
      return acc;
    }
    if (isNaN(parseInt(char)) && !allowedChars.includes(char)) {
      error = "Invalid character";
      return acc;
    }
    return acc + char;
  }, "");
  return {
    error,
    result,
  };
};
