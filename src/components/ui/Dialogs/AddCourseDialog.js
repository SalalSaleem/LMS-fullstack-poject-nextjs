"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddCourseDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Course</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Course</DialogTitle>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          <CourseForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Course</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Course</DrawerTitle>
          <DrawerDescription>
          </DrawerDescription>
        </DrawerHeader>
        <CourseForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function CourseForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label  htmlFor="email">Course Name</Label>
        <Input type="text" id="email" defaultValue="add course name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">description</Label>
        <Input id="username" defaultValue="add description" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">duration</Label>
        <Input id="username" defaultValue="add duration" />
      </div>
      <div>
      <Select>
  <SelectTrigger>
    <SelectValue placeholder="Status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Active">Active</SelectItem>
    <SelectItem value="Not-Active">Not-Active</SelectItem>
    <SelectItem value="pending">pending</SelectItem>
  </SelectContent>
</Select>
</div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
