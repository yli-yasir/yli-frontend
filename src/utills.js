export const getRepoTitle = (kebabCaseTitle) => {
  if (kebabCaseTitle === process.env.REACT_APP_HOME_ADDRESS) {
    return kebabCaseTitle;
  }

  return kebabCaseTitle
    .replaceAll("-", " ")
    .replaceAll(/\b(\w)/g, (_, firstLetter) => firstLetter.toUpperCase());
};

export const makeProjectLink = (repoName, defaultBranch) =>
  `/projects/${repoName}/${defaultBranch}`;

export const getREADMELink = (repoName, defaultBranch) =>
  `https://raw.githubusercontent.com/yli-yasir/${repoName}/${defaultBranch}/README.md`;

export const replaceRelativeLinks = (repoName, defaultBranch, markdown) => {
  const replaced = markdown.replace(/src="(\/.+?)"/g, (_, relativeSrc) => {
    return `src="https://raw.githubusercontent.com/yli-yasir/${repoName}/${defaultBranch}${relativeSrc}"`;
  });
  return replaced;
};
