export interface User {
  email: string
  username: string
}

export interface Credentials {
  email: string
  password: string
}

export interface UserProfile extends User {
  id: string
}
