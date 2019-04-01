import axios from 'axios'

async function fetchGitHubUser(gitHubToken: string): Promise<{ id: string }> {
  // TODO: Add types
  const { data } = await axios({
    method: 'get',
    url: 'https://api.github.com/user',
    params: { access_token: gitHubToken },
  })

  if (data.error) throw new Error(data.error)
  return data
}

export default fetchGitHubUser
