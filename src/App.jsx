import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGradient from "./assets/svg/ButtonGradient"


const App=()=> {
  return (
    <>
     <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Button className="mt-10" href="#login">
          Something
      </Button>
     </div>
     <ButtonGradient/>
    </>
  )
}

export default App
