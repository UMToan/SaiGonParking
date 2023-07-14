const generateCode = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "123456789";
  let code = "";
  for (let i = 0; i < length - 1; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `${code}${numbers.charAt(Math.floor(Math.random() * numbers.length))}`;
};

export default generateCode;

export const generateCodeNum = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let code = "";
  for (let i = 0; i < length - 1; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return `${code}${characters.charAt(
    Math.floor(Math.random() * characters.length)
  )}`;
};

//export default generateCodeNum;

// hàm để tạo ký tự ngẫu nhiên
