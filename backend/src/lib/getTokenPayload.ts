import { Context, TokenPayload } from '../types'
import getEnv from './getEnv'
import jwt from 'jsonwebtoken'

function getTokenPayload(context: Context) {
  try {
    const { token } = context.request.cookies
    return jwt.verify(token, getEnv('APP_SECRET')) as TokenPayload
  } catch (error) {
    throw new Error('Not authenticated')
  }
}

export default getTokenPayload
