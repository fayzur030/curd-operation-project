import { getUsers } from "../services/userServices"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AddUserButton from "./TableButton/AddUserButton"
import ActionButton from "./TableButton/ActionButton"
const UserTable = async () => {
  const users = await getUsers()
  return (
    <div className="mx-auto mt-10 max-w-7xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Users: {users.length}</h1>
        <AddUserButton />
      </div>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>

              <TableCell className="text-right">
                <ActionButton user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default UserTable
