import { User } from "../userTypes"

// get user
export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch(`http://localhost:5000/users`)
    if (!res.ok) {
      throw new Error("fetch to failed users")
    }
    const users = await res.json()
    return users
  } catch (error) {
    console.log(error)
  }
  return []
}

// find one user

export const getFindUser = async (userId: string): Promise<User> => {
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  if (!res.ok) {
    throw new Error("fetch to failed find users")
  }
  const users = await res.json()
  return users
}
