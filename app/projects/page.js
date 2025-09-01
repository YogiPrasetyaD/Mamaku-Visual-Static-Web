import ProjectSection from '@/components/ProjectSection'
import { Suspense } from "react"
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col relative min-h-screen bg-white overflow-x-hidden font-inter'>
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectSection />
      </Suspense>
    </div>
  )
}

export default Page
