'use client'

import Link from "next/link"

function Enrollment() {
  return (
    <Link className='bg-primary dark:bg-violet-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105' href='/enrollment'>Matricular</Link>
  )
}

export default Enrollment