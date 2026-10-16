"use client"
import { Button } from "@/components/ui/button"
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
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface AddUserModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const AddUserModal = ({ open, onOpenChange }: AddUserModalProps) => {
  const router = useRouter()
  const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())
    const res = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newUser),
    })
    console.log("response client side", res)
    onOpenChange(false)
     router.refresh()
    toast.success("User added successfully")
   
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new user.
          </DialogDescription>
        </DialogHeader>

        <form className={cn("grid items-start gap-6")} onSubmit={handleAddUser}>
          <div className="grid gap-3">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
          </div>

          <Button type="submit">Add</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddUserModal
