import  React from 'react'
import tr from './assets/images/pattern-squiggly-line-top.svg'
import bl from './assets/images/pattern-squiggly-line-bottom.svg'
import patternLines from './assets/images/pattern-lines.svg'
import patternCicles from './assets/images/pattern-circle.svg'
import Form from './components/Form'

function App() {

  return (
    <main className={`min-h-screen relative overflow-clip pt-7 pb-28 px-2`}>
      <img src={tr} alt="" className='absolute right-0 md:-right-[7%] lg:-right-[15%] p-0 size-[50vw] max-h-44 top-0'/>
      <img src={patternLines} alt="" className='absolute top-0 '/>
      <img src={patternCicles} alt="" className='absolute  top-1/2 -right-5 size-24 md:right-10 lg:right-1/4 md:size-32 lg:size-48' />
      <img src={patternCicles} alt="" className='absolute size-28 -top-7 -left-7 md:size-32 lg:size-48' />
      <img src={bl} alt="" className='absolute bottom-0 left-0 max-h-80'/>
      < Form />
    </main>
  )
}

export default App
