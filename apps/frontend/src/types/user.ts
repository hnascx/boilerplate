export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  status: "active" | "inactive"
  avatar?: string
  createdAt: string
}
