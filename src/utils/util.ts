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

const createFileFromImage = (
  contentType: string,
  data: ArrayBuffer,
  fileName: string
): File => {
  // Convert the ArrayBuffer to a Blob
  const blob = new Blob([new Uint8Array(data)], {
    type: contentType,
  });

  // Create a File from the Blob
  const file = new File([blob], fileName, { type: contentType });

  return file;
};

export { replaceLeadingHash, arrayBufferToBase64, createFileFromImage };
