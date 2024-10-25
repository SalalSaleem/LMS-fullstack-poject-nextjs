import { CourseTable } from '@/components/ui/DataTables/CourseTable'
import { AddCourseDialog } from '@/components/ui/Dialogs/AddCourseDialog'
import React from 'react'

function courses() {
  return (
    <div>
      <div>
        <h1>welcome to courses</h1>
      <AddCourseDialog/>
      <CourseTable/>
      </div>
    </div>
  )
}

export default courses