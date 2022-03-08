export const getAllIssues = async (username, repoName) => {

    let response = await fetch(`https://api.github.com/repos/${username}/${repoName}/issues`);

    let result = await response.json();

    return result;
}