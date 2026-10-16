import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getFindUser } from "@/src/services/userServices"

interface UserDetails {
  params: Promise<{
    userId: string
  }>
}

const UserDEtails = async ({ params }: UserDetails) => {
  const { userId } = await params
  const findUser = await getFindUser(userId)
  return (
    <div className="mx-auto flex h-screen max-w-7xl items-center justify-center">
      <Card className="w-md">
        <CardHeader>
          <CardTitle>Name: {findUser.name}</CardTitle>
          <CardDescription>Email: {findUser.email}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default UserDEtails
