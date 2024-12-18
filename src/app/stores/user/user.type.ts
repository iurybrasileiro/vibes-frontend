export interface User {
  id: string
  name: string
  email: string
  birthdate: string
  bio: string | null
  profile_picture: string | null
  cover_picture: string | null
  phone: string | null
  visibility: 'public' | 'private'
  verificated: boolean
  disabled: boolean
}

export interface UserStore {
  user?: User
}
