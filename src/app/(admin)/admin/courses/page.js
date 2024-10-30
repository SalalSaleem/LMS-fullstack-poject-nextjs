import { CourseTable } from '@/components/ui/DataTables/CourseTable'
import { AddCourseDialog } from '@/components/ui/Dialogs/AddCourseDialog'
import React from 'react'

function courses() {
  return (
    <div>welcome to courses
      <CourseTable/>
      <AddCourseDialog/>
    </div>
  )
}

export default courses