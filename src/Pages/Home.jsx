import React from "react";
import CustomNav from "../Components/CustomNav";
import CustomTabs from "../Components/CustomTabs";
import Projects from "../Components/Projects";
import { Link } from "react-router-dom";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <div className="px-[120px] w-full text-white bg-black">
      <CustomNav />
      <section className="h-[100vh] flex flex-col justify-center">
        <h3>Full Stack JAVA Developer</h3>
        <h1>
          Hii, I'm <span className="text-pink-700">Bharath</span> M <br /> from
          India
        </h1>
      </section>
      <section id="aboutme" className="">
        <div></div>
        <div>
          <h1>About Me</h1>
          <p>
            Having completed my secondary education at Manasarowar Pushkarini
            Vidyashrama and pursued Pre-University studies at Mahesh PU College,
            specializing in the PCMB stream, I furthered my education by
            enrolling in Mechanical Engineering at Maharaja Institute of
            Technology. Throughout my academic journey, I developed a keen
            interest in coding, particularly in Java. This interest led me to
            choose Java as an elective subject, and over time, I acquired
            proficiency in the language. In my final year of engineering, I was
            drawn to the IT sector and decided to pursue a career in this
            dynamic field after graduation. To enhance my skills and prepare for
            this transition, I enrolled in JSpiders, where I received hands-on
            training in Java Full Stack Development. This experience solidified
            my enthusiasm for coding and equipped me with the necessary skills
            to seek opportunities in the IT job market, where I am currently
            exploring and eager to contribute my expertise.
          </p>
          <CustomTabs />
        </div>
      </section>
      <section id="projects" className="">
        <h1>Projects</h1>
        <Projects />
      </section>
      <section id="contactme">
        <h1>Contact Me</h1>
        <div>
          <Link className="flex items-center">
            <HiMail className="mr-4" />
            adarshravi34@gmail.com
          </Link>
        </div>
        <div>
          <Link className="flex items-center">
            <HiPhone className="mr-4" />
            +91 7019854221
          </Link>
        </div>
        <div className="flex items-center">
          <Link>
            <FaGithub />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
        </div>

        <Link download="Bharath Resume">
          <button> Download Resume</button>
        </Link>
        <form action="">
        <div className="my-8">
        <input type="text" className="bg-[#262626] border-none focus:outline-none" placeholder="Your Name" />
        </div>
        <div className="my-8">
        <input type="email" placeholder="Your Email" className="bg-[#262626] border-none focus:outline-none" />
        </div>
        <textarea name="message" id="message" cols="50" rows="8" placeholder="Your Message" className="bg-[#262626] border-none focus:outline-none" />

        <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
