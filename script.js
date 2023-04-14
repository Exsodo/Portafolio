function encryptText() {
  const input = document.getElementById("input-text").value;
  let output = "";
  
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    output += String.fromCharCode(charCode + 1);
  }
  
  document.getElementById("output-text").value = output;
}

function decryptText() {
  const input = document.getElementById("output-text").value;
  let output = "";
  
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    output += String.fromCharCode(charCode - 1);
  }
  
  document.getElementById("decrypted-text").value = output;
}
