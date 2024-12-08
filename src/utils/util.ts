const replaceLeadingHash = (input: string): string => {
  if (input.startsWith("#")) {
    return "%23" + input.slice(1);
  }
  return input;
};

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

export { replaceLeadingHash, arrayBufferToBase64 };
