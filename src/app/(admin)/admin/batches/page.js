import { BatchTable } from '@/components/ui/DataTables/BatchTable'
import { AddBatchDialog } from '@/components/ui/Dialogs/AddBatchDialog'
import React from 'react'

function batches() {
  return (
    <div>
      welcome to batches
      <div className='flex justify-end'>
      <AddBatchDialog/>
      </div>
      <BatchTable/>
      </div>
  )
}

export default batches