import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+92-3360327970</h3>
                  <span>24/7 Service</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>aicoders123@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>aicoders123@gmail.com</h3>
                  <span>Career at AI CODERS</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>
      
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="ecf1faa6-e6ab-4cc1-87e4-09ee288b25a3" />
                <div className='grid-2'>
                  <div className='inputs'>
                    <span htmlFor="name">Name</span>
                    <input type='text' name="name" placeholder="Enter your name" required/>
                  </div>
                  <div className='inputs'>
                    <span htmlFor="email">Email</span>
                    <input type='text' name="email" placeholder="Enter your email" required/>
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span htmlFor="budget">Your Budget</span>
                    <input type='text' name="budget" placeholder="Add budget" required/>
                  </div>
                  <div className='inputs'>
                    <span htmlFor="time">Timeframe</span>
                    <input type='text' name="timeframe" placeholder="Enter timeframe" required/>
                  </div>
                </div>
                <div className='inputs'>
                  <span htmlFor="message">Tell us a bit about your project*</span>
                  <textarea name="message" cols='30' rows='10' placeholder="Describe your project" required></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
