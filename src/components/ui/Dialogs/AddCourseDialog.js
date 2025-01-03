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

export function AddCourseDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Course</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CourseForm />
      </DialogContent>
    </Dialog>
  )
}

function CourseForm() {
  return (
    <form className="grid items-start gap-4 max-h-[80vh] overflow-y-auto">
      <div className="grid gap-2">
        <Label htmlFor="courseName">Course Name</Label>
        <Input type="text" id="courseName" placeholder="Add course name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select id="status">
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="notActive">Not Active</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input type="text" id="description" placeholder="Add course description" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="duration">Duration</Label>
        <Input type="text" id="duration" placeholder="Add course duration" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
