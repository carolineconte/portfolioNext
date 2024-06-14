import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from "react-icons/si";


const MediaIcons = () => {
  return (
    <>
      <Link href='https://www.upwork.com/freelancers/carolinec35'
        target='_blank'
        className='button-animate'>
        <div className="icon"><SiUpwork /></div>
        <span>Upwork profile</span>
      </Link>

      <Link href='https://github.com/carolineconte'
        className='button-animate'
        target='_blank'
      >
        <div className="icon"><FaGithub /></div>
        <span>GitHub</span>
      </Link>

      <Link href='https://www.instagram.com/conte.dsgn/'
        className='button-animate'
        target='_blank'
      >
        <div className="icon"><FaInstagram /></div>
        <span className=''>Instagram</span>
      </Link>

      <Link href='https://www.linkedin.com/in/caroline-contedasilva/'
        className='button-animate'
        target='_blank'
      >
        <div className="icon"><FaLinkedinIn /></div>
        <span className=''>Linkedin</span>
      </Link>

    </>
  )
}

export default MediaIcons