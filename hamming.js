export const compute = (stringA, stringB) => {
  if (stringA.length == 0 && stringB.length == 0) return 0;

  // error handling
  if (stringA.length == 0) throw new Error("left strand must not be empty");
  if (stringB.length == 0) throw new Error("right strand must not be empty");
  if (stringA.length != stringB.length) {
    throw new Error("left and right strands must be of equal length");
  }

  // loop through each character in the string and check for equality
  const strLength = stringA.length;
  let hammingDistance = 0;

  for (let i = 0; i < strLength; i++) {
    if (stringA.substr(i, 1) != stringB.substr(i, 1)) hammingDistance++;
  }

  return hammingDistance;
};
