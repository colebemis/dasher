import { graphql } from 'graphql'
import jwt from 'jsonwebtoken'
import fetchGitHubToken from '../lib/fetchGitHubToken'
import fetchGitHubUser from '../lib/fetchGitHubUser'
import schema from '../schema'

jest.mock('../lib/fetchGitHubToken')
jest.mock('../lib/fetchGitHubUser')

// Cast mock functions to their correct types.
const fetchGitHubTokenMock = fetchGitHubToken as jest.Mock<
  ReturnType<typeof fetchGitHubToken>
>
const fetchGitHubUserMock = fetchGitHubUser as jest.Mock<
  ReturnType<typeof fetchGitHubUser>
>

describe('signIn', () => {
  // Save previous environment to restore later.
  const previousEnv = process.env

  beforeEach(() => {
    // Make a copy of previous environment.
    process.env = { ...previousEnv }
  })

  afterEach(() => {
    // Restore previous environment.
    process.env = previousEnv
  })

  test('generates a JWT containing userId and gitHubToken', async () => {
    const fakeAppSecret = 'fake_app_secret'
    const fakeGitHubCode = 'fake_github_code'
    const fakeGitHubToken = 'fake_github_token'
    const fakeGitHubUser = { id: 'fake_github_id' }
    const fakeUser = { id: 'fake_user_id' }

    // Set environment variables.
    process.env.APP_SECRET = fakeAppSecret

    // Define mock function return values.
    fetchGitHubTokenMock.mockReturnValueOnce(Promise.resolve(fakeGitHubToken))
    fetchGitHubUserMock.mockReturnValueOnce(Promise.resolve(fakeGitHubUser))

    // Prepare and run mutation.
    const document = `
      mutation signIn($gitHubCode: String!) {
        signIn(gitHubCode: $gitHubCode) {
          token
        }
      }
    `
    const variables = { gitHubCode: fakeGitHubCode }
    const context = { prisma: { upsertUser: () => fakeUser } }
    const result = await graphql(schema, document, null, context, variables)

    // Assertions
    expect(result.data).toBeTruthy()
    expect(result.errors).toBeFalsy()

    if (result.data) {
      const payload = jwt.verify(result.data.signIn.token, fakeAppSecret) as any
      expect(payload.userId).toEqual(fakeUser.id)
      expect(payload.gitHubToken).toEqual(fakeGitHubToken)
    }
  })

  test('returns an error if unable to fetch gitHubToken', async () => {
    const fakeAppSecret = 'fake_app_secret'
    const fakeGitHubCode = 'fake_github_code'
    const fakeUser = { id: 'fake_user_id' }

    // Set environment variables.
    process.env.APP_SECRET = fakeAppSecret

    // Define mock function return values.
    fetchGitHubTokenMock.mockReturnValueOnce(Promise.reject())

    // Prepare and run mutation.
    const document = `
      mutation signIn($gitHubCode: String!) {
        signIn(gitHubCode: $gitHubCode) {
          token
        }
      }
    `
    const variables = { gitHubCode: fakeGitHubCode }
    const context = { prisma: { upsertUser: () => fakeUser } }
    const result = await graphql(schema, document, null, context, variables)

    // Assertions
    expect(result.data).toBeFalsy()
    expect(result.errors).toBeTruthy()
  })
})
