import { StudentsTable } from '@/components/ui/DataTables/StudentsTable'
import { AddStudentDialog } from '@/components/ui/Dialogs/AddStudentDialog'
import React from 'react'

function students() {
  return (
    <div>welcome to students
      <AddStudentDialog/>
      <StudentsTable/>
    </div>
  )
}

export default students