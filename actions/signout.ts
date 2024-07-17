'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const signout = () => {
  const COOKIE_NAME = process.env.COOKIE_NAME
  if (!COOKIE_NAME) {
    throw new Error('COOKIE_NAME is not defined')
  }
  cookies().delete(COOKIE_NAME)
  redirect('/signin')
}
