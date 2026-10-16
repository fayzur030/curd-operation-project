import UserTable from "@/src/components/UsersTable"
import { Suspense } from "react"

const UserPage = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <UserTable />
      </Suspense>
    </div>
  )
}

export default UserPage
