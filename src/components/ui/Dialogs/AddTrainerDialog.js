"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddTrainerDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Trainer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Add Trainer</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <TrainerForm />
      </DialogContent>
    </Dialog>
  )
}

function TrainerForm() {
  return (
    <form className="grid items-start gap-4">
      <div className="grid gap-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" placeholder="Add first name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" placeholder="Add last name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="education">Education</Label>
        <Input type="text" id="education" placeholder="Add education" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cnic">CNIC</Label>
        <Input type="text" id="cnic" placeholder="Add CNIC" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Add email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="profilePicture">Profile Picture</Label>
        <Input type="file" id="profilePicture" accept="image/*" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address">Address</Label>
        <Input type="text" id="address" placeholder="Add address" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gender">Gender</Label>
        <Select id="gender">
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="role">Role</Label>
        <Input type="text" id="role" placeholder="Add role" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
