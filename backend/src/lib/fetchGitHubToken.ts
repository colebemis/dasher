import axios from 'axios'

async function fetchGitHubToken(gitHubCode: string): Promise<string> {
  // TODO: Add types
  const { data } = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    data: {
      client_id: process.env.GH_CLIENT_ID,
      client_secret: process.env.GH_CLIENT_SECRET,
      code: gitHubCode,
    },
    headers: {
      Accept: 'application/json',
    },
  })

  if (data.error) throw new Error(data.error)
  return data.access_token
}

export default fetchGitHubToken
