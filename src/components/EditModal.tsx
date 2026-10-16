import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "cn"
import { User } from "../userTypes"
import { toast } from "sonner"

interface AddUserModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: User
}
const EditModal = ({ open, onOpenChange, user }: AddUserModalProps) => {
  const router = useRouter()
  const handleEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const updatedUser = Object.fromEntries(formData.entries())
    console.log(updatedUser)
    const res = await fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updatedUser),
    })
    console.log("response client side", res)
    onOpenChange(false)
    router.refresh()
    toast.success("Edit User successfully")
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new user.
            </DialogDescription>
          </DialogHeader>

          <form
            className={cn("grid items-start gap-6")}
            onSubmit={handleEditUser}
          >
            <div className="grid gap-3">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={user.name} />
              </div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                defaultValue={user.email}
              />
            </div>

            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditModal
