/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Full Stack Developement",
    description: "Crafting Seamless Digital Experiences from Front to Back"
  },
  {
    icon: "/images/icon-dev.svg",
    title: "CEO & Co-Founder",
    description: "Guiding Visionary Leadership for Business Growth"
  },
  {
    icon: "/images/icon-app.svg",
    title: "Android Developer",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Freelancing",
    description: "Delivering Expert Solutions with Flexibility and Efficiency"
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      As a full-stack developer with an entrepreneurial mindset, I excel at transforming intricate technical challenges into innovative solutions. My expertise spans front-end and back-end development, enabling me to craft seamless digital experiences that not only meet user needs but also drive business success. I approach each project strategically, analyzing market trends, user behaviors, and business goals to ensure that the solutions I create are not just technically robust but also aligned with the overall project objectives.
      </p>

      <p>
      I am a CEO, co-founder, and Chief Product Officer (CPO) with a deep understanding of business strategy, product development, and customer experience. Leveraging my leadership skills and industry knowledge, I drive innovation, foster collaboration, and ensure that our products align with market demands and user expectations. My goal is to lead our company to success by delivering exceptional products that create value for our customers and drive sustainable growth.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About