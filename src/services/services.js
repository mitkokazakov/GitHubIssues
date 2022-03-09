export const getAllIssues = async (username, repoName) => {

    let response = await fetch(`https://api.github.com/repos/${username}/${repoName}/issues`);

    //let result = await response.json();

    return response;
}

export const getAllComments = async (username,repo,number) =>{

    let url = `https://api.github.com/repos/${username}/${repo}/issues/${number}/comments`;
    
    let response = await fetch(url);

    return response;
}