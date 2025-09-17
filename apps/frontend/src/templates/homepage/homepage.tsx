import { UserList } from "./sections/user-list/user-list"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-screen justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <UserList />
    </div>
  )
}
