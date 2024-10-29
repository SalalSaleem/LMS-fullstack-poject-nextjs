import { BatchTable } from '@/components/ui/DataTables/BatchTable'
import { AddStudentDialog } from '@/components/ui/Dialogs/AddCourseDialog'
import React from 'react'

function batches() {
  return (
    <div>welcome to batches
      <BatchTable/>
      <AddStudentDialog/>
    </div>
  )
}

export default batches