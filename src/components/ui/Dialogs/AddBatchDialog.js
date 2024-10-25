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

export function AddBatchDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <BatchForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <BatchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function BatchForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="batchName">Batch Name</Label>
        <Input type="text" id="batchName" placeholder="Add batch name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="batchStatus">Batch Status</Label>
        <Select id="batchStatus">
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="started">Started</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Select id="trainer">
          <SelectTrigger>
            <SelectValue placeholder="Select trainer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trainer1">Trainer 1</SelectItem>
            <SelectItem value="trainer2">Trainer 2</SelectItem>
            <SelectItem value="trainer3">Trainer 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="numStudents">No of Students</Label>
        <Input type="number" id="numStudents" placeholder="Number of students" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="courseName">Course Name</Label>
        <Select id="courseName">
          <SelectTrigger>
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="course1">Course 1</SelectItem>
            <SelectItem value="course2">Course 2</SelectItem>
            <SelectItem value="course3">Course 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
