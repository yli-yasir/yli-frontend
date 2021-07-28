export const getRepoTitle = (kebabCaseTitle) =>
  kebabCaseTitle
    .replaceAll("-", " ")
    .replaceAll(/\b(\w)/g, (_, firstLetter) => firstLetter.toUpperCase());

export const makeProjectLink = (repoName, defaultBranch) => `
projects/${repoName}/${defaultBranch}`;


export const getREADMELink = (repoName, defaultBranch) => `
https://raw.githubusercontent.com/yli-yasir/${repoName}/${defaultBranch}/README.md`;

export const shorten = (str, charCount) => `${str.slice(0, charCount)}...`;
