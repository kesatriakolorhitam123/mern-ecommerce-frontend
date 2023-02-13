import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { HiOutlineArrowLeft} from "react-icons/hi"
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

function SIngleBlog() {
  return (
    <>
    <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                    <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft className="fs-4"/> Go back to Blogs</Link>
                    <h3 className="title">
                        A Beautiful Sunday Morning Renaissance
                    </h3>
                    <img src="/images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog"/> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default SIngleBlog