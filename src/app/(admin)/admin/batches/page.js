import { BatchTable } from '@/components/ui/DataTables/BatchTable'
import { AddBatchDialog } from '@/components/ui/Dialogs/AddBatchDialog'
import React from 'react'

function batches() {
  return (
    <div>welcome to batches
      <BatchTable/>
      <AddBatchDialog/>
    </div>
  )
}

export default batches