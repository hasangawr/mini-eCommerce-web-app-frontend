const replaceLeadingHash = (input: string): string => {
  if (input.startsWith("#")) {
    return "%23" + input.slice(1);
  }
  return input;
};

export { replaceLeadingHash };
