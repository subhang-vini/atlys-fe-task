export default (inputValue, variableValue) => {
  const correctedExpression = inputValue
    .replace(/(\d)(x)/g, "$1 * $2")
    .replace(/\^/g, "**");
  const sanitizedExpression = correctedExpression.replace(
    /x/g,
    `(${variableValue})`
  );
  console.log(sanitizedExpression, "sanitizedExpression");
  const result = new Function(`return ${sanitizedExpression}`)();
  return result;
};
