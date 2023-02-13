import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
import Container from '../components/Container';

function Contact() {
  return (
    <>
        <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9019.177220752534!2d109.88047909726832!3d-7.581253804245201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7abe999dc65431%3A0xe02d2f93fe058104!2sGn.%20Condong%2C%20Kec.%20Bruno%2C%20Kabupaten%20Purworejo%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1675898696159!5m2!1sid!2sid" width="600" height="450" className="border-0 w-100" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div clasName="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name
                      "/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
               
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineHome className="fs-5"/>
                    <address className="mb-0">Jl.Kayu Putuh Tengah 1 Blok A No.2, Pulogadung</address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiPhoneCall className="fs-5"/>
                    <a href="tel:+62823 2287 5277">+62823 2287 5277</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineMail className="fs-5"/>
                    <a href="mailto:afidzpratama@gmail.com">afidzpratama@gmail.com</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiInfoCircle className="fs-5"/>
                    <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact