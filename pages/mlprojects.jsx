
import Navbar from '../components/Navbar'
import Image from 'next/Image'
import Link from 'next/Link'
const Daprojects = () => {
  return (
    <div className='flex'>
        <Navbar/>
        <section className='mx-4 my-4 bg-botgreen text-shipgray w-full border-solid border-shipgray border-4'>
            <h1 className='text-3xl text-center  py-8'>Machine Learning Projects</h1>
           
            <div className='my-4 px-8 flex items-center'>
                <article className='mx-4'> <Image src='/profile.jpeg' width={'400px'}height={'300px'} alt='profilepic'/></article>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet maiores animi corporis suscipit ipsam quibusdam itaque non similique perspiciatis quis dolorum optio autem eligendi quaerat, repudiandae et, perferendis rem!<Link href='/#'><a>View More</a></Link></article>
            </div>
            <div className='my-4 px-8 flex items-center'>
                
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet maiores animi corporis suscipit ipsam quibusdam itaque non similique perspiciatis quis dolorum optio autem eligendi quaerat, repudiandae et, perferendis rem!<Link href='/#'><a>View More</a></Link></article>
                <article className='mx-4'> <Image src='/profile.jpeg' width={'400px'}height={'300px'} alt='profilepic'/></article>
            </div>
        </section>
    </div>
  )
}

export default Daprojects