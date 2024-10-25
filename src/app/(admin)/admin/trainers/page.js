import { TrainerTable } from '@/components/ui/DataTables/TrainerTable'
import { AddTrainerDialog } from '@/components/ui/Dialogs/AddTrainerDialog'
import React from 'react'

function trainers() {
  return (
    <div>welcome to trainers
      <AddTrainerDialog/>
      <TrainerTable/>
    </div>
  )
}

export default trainers