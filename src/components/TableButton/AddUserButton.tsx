"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import AddUserModal from "../AddUserModal"

const AddUserButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add User</Button>

      <AddUserModal open={open} onOpenChange={setOpen} />
    </div>
  )
}

export default AddUserButton
