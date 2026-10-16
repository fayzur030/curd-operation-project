"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "@/src/userTypes"
import { MoreHorizontalIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import EditModal from "../EditModal"
interface UserProps {
  user: User
}

const ActionButton = ({ user }: UserProps) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete user")
      }

      toast.success("User deleted successfully!")
      router.refresh()
    } catch (error) {
      console.error("Error deleting user:", error)
    }
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontalIcon />
              <span className="sr-only">Open menu</span>
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Edit
          </DropdownMenuItem>
          <Link href={`users/${user._id}`}>
            <DropdownMenuItem>View Details</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDeleteUser} variant="destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditModal user={user} open={open} onOpenChange={setOpen} />
    </div>
  )
}

export default ActionButton
