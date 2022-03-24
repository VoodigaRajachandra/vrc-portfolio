import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='w-1/4 h-full bg-botgreen border-solid border-4 border-nepal'>
       <Image src='/profile.jpeg' width={'400px'}height={'300px'} alt='profilepic'/>
        <div className='text-shipgray my-4 text-2xl border-solid border-2 border-shipgray py-4 text-center text-bold '>
            <Link href='/about'><a>About Me</a></Link>
        </div>
        <div className='text-shipgray my-4 text-2xl border-solid border-2 border-shipgray py-4 text-center text-bold'>
            <Link href='/daprojects'><a>Data Analysis projects</a></Link>
        </div>
        <div className='text-shipgray my-4 text-2xl border-solid border-2 border-shipgray py-4 text-center text-bold'>
            <Link href='/mlprojects'><a>Machine Learning projects</a></Link>
        </div>
        <div className='text-shipgray my-4 text-2xl border-solid border-2 border-shipgray py-4 text-center text-bold'>
            <Link href='/dlprojects'><a>Deep Learning projects</a></Link>
        </div>
        <div className='text-shipgray my-4 text-2xl border-solid border-2 border-shipgray pt-4 pb-8 text-center text-bold'>
            <Link href='/skills'><a>skills</a></Link>
        </div>
         
         
    </nav>
  )
}

export default Navbar