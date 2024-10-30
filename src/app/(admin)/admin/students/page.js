import { StudentsTable } from '@/components/ui/DataTables/StudentsTable'
import { AddStudentDialog } from '@/components/ui/Dialogs/AddStudenrDialog'
import React from 'react'

function students() {
  return (
    <div>welcome to students
      <StudentsTable/>
      <AddStudentDialog/>
    </div>
  )
}

export default students