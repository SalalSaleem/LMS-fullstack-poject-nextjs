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

export function AddBatchDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Batch</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <BatchForm />
      </DialogContent>
    </Dialog>
  )
}

function BatchForm() {
  return (
    <form className="grid items-start gap-4 max-h-[80vh] overflow-y-auto">
      <div className="grid gap-2">
        <Label htmlFor="batchName">Batch Name</Label>
        <Input type="text" id="batchName" placeholder="Add batch name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select id="status">
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Input type="text" id="trainer" placeholder="Add trainer name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="numberOfStudents">Number of Students</Label>
        <Input type="number" id="numberOfStudents" placeholder="Add number of students" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
