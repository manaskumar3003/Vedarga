import { BellRing, Check } from "lucide-react"

import { cn } from "../../../lib/utils"
import { Button } from "../../..//components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../..//components/ui/card"
import { Switch } from "../../..//components/ui/switch"
import { toast } from "sonner"

const notifications = [
  {
     title: "Your call has been confirmed.",
     description: "1 hour ago",
  },


]

type CardProps = React.ComponentProps<typeof Card>

export function Notification({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] mt-2 w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className=" flex items-center space-x-4 rounded-md border px-4 py-4">
          <BellRing />
          <div className="flex-1 space-y-0">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch onCheckedChange={()=>
        toast("push notification changed", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
           />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button  onClick={() =>
        toast("All notification marked as read", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      } className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
