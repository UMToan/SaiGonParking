const generateCode1 = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code1 = "";
  for (let i = 0; i < length; i++) {
    code1 += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `${code1}`;
};

export default generateCode1;
