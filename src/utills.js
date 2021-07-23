export const getRepoTitle = (kebabCaseTitle) => {
   return kebabCaseTitle.replaceAll(/\W(\w)/g,(_, firstLetter) => ` ${firstLetter.toUpperCase()}`);
}