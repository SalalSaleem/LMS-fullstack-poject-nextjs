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

export function AddStudentDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Student</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <StudentForm />
      </DialogContent>
    </Dialog>
  )
}

function StudentForm() {
  const [image, setImage] = React.useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form className="grid items-start gap-4 max-h-[80vh] overflow-y-auto">
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
        <Input type="file" id="profilePicture" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Profile" className="mt-2 h-24 w-24 rounded-full" />}
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
        <Select id="role">
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="assistant">Assistant</SelectItem>
            <SelectItem value="instructor">Instructor</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
