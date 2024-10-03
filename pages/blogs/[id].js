import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='AICODERS: Leading the Future of AI-Powered Solutions' />
              <p className='desc-p'>
                **About Us:** At AICODERS, we are at the forefront of the digital revolution, transforming the way businesses approach technology. Our team of passionate AI experts and developers is dedicated to building state-of-the-art websites and custom GPT models tailored to the unique needs of businesses. We specialize in harnessing the power of artificial intelligence to create efficient, scalable, and user-friendly solutions that empower organizations to innovate and thrive in an increasingly digital world.
              </p>
              <p className='desc-p'>
                **Our Vision:** Our vision is to become a global leader in AI-driven technology solutions, enabling businesses of all sizes to tap into the immense potential of artificial intelligence. We believe that AI should be accessible, practical, and beneficial for everyone, and we are committed to developing cutting-edge tools that make this a reality.
              </p>
              <p className='desc-p'>
                **What We Do:**
                - **AI-Driven Website Development:** Our team builds sleek, responsive, and high-performance websites that are powered by the latest AI technologies. From intelligent chatbots to automated processes, we ensure that your website doesn’t just look good but also works smarter to meet your business goals.
                - **Custom GPT Development:** We specialize in creating custom GPTs (Generative Pre-trained Transformers) that are tailored to specific business functions. Whether it’s automating customer support, content creation, or data analysis, our custom GPTs help companies streamline operations and enhance productivity.
                - **Innovative Solutions for Every Industry:** At AICODERS, we work with clients across a wide range of industries—from healthcare and finance to retail and education. We pride ourselves on delivering solutions that are not only innovative but also highly adaptable to different business environments and needs.
              </p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='AI in Medicine Revolutionizes Diagnosis' />
              <p className='desc-p'>
                AI tools are transforming the medical field by providing faster and more accurate diagnoses. Advanced machine learning models are analyzing patient data with unprecedented precision, enabling early detection of life-threatening diseases, which enhances treatment outcomes and saves lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
