export const getRepoTitle = (kebabCaseTitle) => (
   kebabCaseTitle
      .replaceAll('-', ' ')
      .replaceAll(/\b(\w)/g, (_, firstLetter) => firstLetter.toUpperCase())
);


export const shorten = (str, charCount) => `${str.slice(0,charCount)}...`