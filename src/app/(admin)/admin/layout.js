import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'


function layout({children}) {
  return (
    <div>
        <Tabs defaultValue="account" className="w-full">
  <TabsList className="w-full">
   <Link href={"/admin"}><TabsTrigger value="admin">admin</TabsTrigger></Link>
   <Link href={"/admin/dashboard"}><TabsTrigger value="dashboard">dashboard</TabsTrigger></Link>
    <Link href={"/admin/batches"}><TabsTrigger value="batches">batches</TabsTrigger></Link>
    <Link href={"/admin/students"}><TabsTrigger value="students">students</TabsTrigger></Link>
    <Link href={"/admin/trainers"}><TabsTrigger value="trainers">trainers</TabsTrigger></Link>
    <Link href={"/admin/courses"}><TabsTrigger value="courses">courses</TabsTrigger></Link>
  </TabsList>
  <TabsContent value="admin">{children}</TabsContent>
  <TabsContent value="dashboard">{children}</TabsContent>
  <TabsContent value="batches">{children}</TabsContent>
  <TabsContent value="students">{children}</TabsContent>
  <TabsContent value="trainers">{children}</TabsContent>
  <TabsContent value="courses">{children}</TabsContent>
</Tabs>

        {children}
    </div>
  )
}

export default layout