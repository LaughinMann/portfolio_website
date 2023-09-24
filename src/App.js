import { useEffect, useState, useRef } from "react";
import "./App.css";
import photo from "./images/kelvin.jpg";
import resume from "./resume_web.pdf";
import github_icon from "./images/github-icon.svg";
import linkedin_icon from "./images/linkedin-icon.svg";
import ns_1 from "./images/nanoshot/ns_1.png";
import ns_2 from "./images/nanoshot/ns_2.png";
import ns_3 from "./images/nanoshot/ns_3.png";
import shopping_1 from "./images/java-app/shopping_1.png";
import shopping_2 from "./images/java-app/shopping_2.png";
import shopping_3 from "./images/java-app/shopping_3.png";
import shopping_4 from "./images/java-app/shopping_4.png";
import website_1 from "./images/react-app/website_1.png";
import website_2 from "./images/react-app/website_2.png";
import website_3 from "./images/react-app/website_3.png";
import website_4 from "./images/react-app/website_4.png";
import bluerov from "./images/bluerov/bluerov.png";
import code from "./images/bluerov/code.png";
import modem from "./images/bluerov/modem.png";

let prefix = "kelvin.dhoman";
let provider = "gmail.com";

function NavBar() {
  const [navBurgerOpen, setNavBurgerOpen] = useState(false);

  return (
    <nav class="flex items-center justify-between flex-wrap bg-slate-50 p-6 nav-shadow">
      <div class="flex items-center flex-shrink-0 text-slate-900  mr-6">
        <span class="font-semibold text-xl tracking-tight">{`< Kelvin Dhoman />`}</span>
      </div>
      <div class="block lg:hidden">
        <button
          onClick={() => {
            setNavBurgerOpen((prev) => !prev);
          }}
          class="flex items-center px-3 py-2 border rounded text-sky-600 border-sky-600 hover:text-sky-400 hover:border-sky-400 transition-colors duration-300"
        >
          {navBurgerOpen ? (
            <svg
              class="h-3 w-3 text-sky-600"
              viewBox="0 0 20 20"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>

      {navBurgerOpen ? (
        <div class="w-full nav-items lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href={resume}
              target="_blank"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50  hover:text-white  mr-4"
              rel="noreferrer"
            >
              📋 PDF Resume
            </a>
            <a
              href="#education"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50  hover:text-white  mr-4"
            >
              🎓 Education
            </a>
            <a
              href="#experience"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50  hover:text-white  mr-4"
            >
              🤵 Work Experience
            </a>
            <a
              href="#projects"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50   hover:text-white mr-4"
            >
              💡 Projects
            </a>
          </div>
        </div>
      ) : (
        <div class="w-full nav-items hidden sm:hidden md:hidden lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href={resume}
              target="_blank"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50  hover:text-white  mr-4"
              rel="noreferrer"
            >
              📋 PDF Resume
            </a>
            <a
              href="#education"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50  hover:text-white  mr-4"
            >
              🎓 Education
            </a>
            <a
              href="#experience"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50  hover:text-white  mr-4"
            >
              🤵 Work Experience
            </a>
            <a
              href="#projects"
              class="block mt-4 lg:inline-block lg:mt-0 text-slate-50   hover:text-white mr-4"
            >
              💡 Projects
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-slate-50 leading-relaxed text-slate-900 antialiased">
        {/*
        <span className="particle-green-square" style={{top: 250, left: 250}}></span>
        <span className="particle-blue-circle" style={{top: 185, right: 350}}></span>
        <span className="particle-red-circle" style={{bottom: 50, left: 650}}></span>
        */}
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4 lg:py-96">
            <div className="sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-center">
              <h1 className="text-4x1 tracking-tight text-slate-900 text-4xl pb-32">
                Hey there! <span class="wave">👋</span>
              </h1>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5x1">
                  Kelvin Dhoman
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-sky-500 sm:text-xl">
                  Software & Web Developer
                </h2>
                <p className="py-4">
                  Hi, I'm a passionate software and web developer that has
                  experience with technologies such as HTML/CSS/JS + React, C#,
                  C++, Python, Unity, Unreal Engine and many more! I currently
                  live in Queens, New York.
                </p>
                <p>
                  Feel free to{" "}
                  <a
                    className="text-sky-500 underline decoration-wavy underline-offset-2 hover:text-sky-400 transition-colors duration-300"
                    id="email"
                    href={`mailto:${prefix}@${provider}`}
                  >
                    email me!
                  </a>
                </p>
                <div id="social-links">
                  <a aria-label="Github" href="https://github.com/LaughinMann">
                    <img src={github_icon} alt="Github link" />
                  </a>
                  <a
                    aria-label="Linkedin"
                    href="https://www.linkedin.com/in/kelvin-dhoman-679a67207/"
                  >
                    <img src={linkedin_icon} alt="Linkedin link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-center">
              <img
                src={photo}
                className="shadow-2xl portrait-img rounded-3xl sm:w-96 md:w-4/6 md:m-auto sm:m-auto lg:w-5/6 shadow-gray-500/50 border-8 transform scale-75 rotate-6 translate-x-2 translate-y-15"
                alt="Potrait of myself."
              />
            </div>
          </div>
          <div
            id="education"
            className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4"
          >
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-2x1">
              🎓 Education
            </h3>
            <div className="blocked-segment">
              <ul className="list-inside">
                <li>
                  <div className="flex justify-between">
                    <div className="list-header">
                      Florida Atlantic University
                    </div>
                    <p>📅 May 2021 - May 2023</p>
                  </div>
                  <p className="block text-sky-500">
                    Bachelor of Science in <strong>Computer Science</strong>,
                    Minor in <strong>AI</strong>
                  </p>
                  <p>
                    <strong>Relevant Coursework</strong>: Design & Analysis Of
                    Algorithms, Object-Oriented Design & Programming, Python
                    Programming, Intro to Deep Learning & Data Science, Intro to
                    Database Structures, Principles of Software Engineering
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="experience"
            className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4"
          >
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-2x1">
              🤵 Work Experience
            </h3>
            <div className="blocked-segment">
              <ul className="list-inside">
                <li>
                  <div className="flex justify-between">
                    <div className="list-header">Advance Auto Parts Inc.</div>
                    <p>📅 October 2019 - April 2020</p>
                  </div>
                  <p className="block text-sky-500">Parts Salesperson</p>
                  <p>
                    • Demonstrated excellent communication skills and
                    organizational skills and delivered exceptional customer
                    service by providing D.I.Y services such as battery
                    installation, battery testing, wiper blade installations,
                    etc. etc.
                  </p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div className="list-header">
                      Florida Atlantic University - College of Nursing
                    </div>
                    <p>📅 April 2022 - August 2022</p>
                  </div>
                  <p className="block text-sky-500">IT Assistant</p>
                  <p>
                    • Effectively managed college websites through proficient
                    content management, ensuring up-to-date and accurate
                    information for the college
                  </p>
                  <p>
                    • Utilized WIX Website Editor to create an intuitive and
                    user-friendly website for a Nursing Association, resulting
                    in an increase in member engagement and acquisition
                  </p>
                  <p>
                    • Installed and configured network devices, including a
                    patch panel, firewall, gateway, and switch to connect over
                    <strong> 10</strong> computers to the internet at an FAU
                    clinic in West Palm Beach.
                  </p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div className="list-header">
                      King and Queen Auto Repair LLC
                    </div>
                    <p>📅 May 2020 - Present</p>
                  </div>
                  <p className="block text-sky-500">Apprentice Technician</p>
                  <p>
                    • Assisted Shop Manager to streamline maintenance processes,
                    reducing labor time by <strong>50%</strong>, and decreasing
                    vehicle turnaround time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="projects"
            className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4"
          >
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-2x1">
              💡 Projects
            </h3>
            <div className="blocked-segment">
              <ul className="list-inside">
                <li id="nanoshot">
                  <div className="flex justify-between">
                    <div className="list-header">Mobile Arcade Game</div>
                    <p>📅 June 2019 - February 2020</p>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal tech-stack">
                    <div>Unity</div>
                    <div>C#</div>
                    <div>AdMob</div>
                    <div>Facebook SDK</div>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal project-images">
                    <img src={ns_1} alt="Nano Shot Screenshot" />
                    <img src={ns_2} alt="Nano Shot Screenshot" />
                    <img src={ns_3} alt="Nano Shot Screenshot" />
                  </div>
                  <p>
                    • Independently developed a fast-paced, fully-featured
                    mobile Arcade game application utilizing Unity3D
                  </p>
                  <p>
                    • Served ads with Google AdMob, and monitored user
                    interactions and general analytics utilizing Facebook SDK
                  </p>
                  <p>
                    • Application was downloaded by <strong>200+</strong> users
                    with positive reviews.
                  </p>
                </li>
                <li id="react-site">
                  <div className="flex justify-between">
                    <div className="list-header">
                      Retirement Community Property Website
                    </div>
                    <p>📅 May 2022 - July 2022</p>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal tech-stack">
                    <div>MongoDB</div>
                    <div>Express</div>
                    <div>React</div>
                    <div>Node.JS</div>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal project-images">
                    <img src={website_1} alt="Property Website Screenshot" />
                    <img src={website_2} alt="Property Website Screenshot" />
                    <img src={website_3} alt="Property Website Screenshot" />
                    <img src={website_4} alt="Property Website Screenshot" />
                  </div>
                  <p>
                    • Developed collaboratively a fictional retirement
                    community’s property inventory website
                  </p>
                  <p>
                    • Responsible for the development of the front-end utilizing
                    React, HTML, and CSS.
                  </p>
                  <p>
                    • Implemented back-end user management and edit profile
                    features with Node.JS, MongoDB and Upload.io API
                  </p>
                  <p>
                    • Deployed website using Amazon’s AWS for professors and
                    students to view the website.
                  </p>
                </li>
                <li id="java-app">
                  <div className="flex justify-between">
                    <div className="list-header">Shopping Application</div>
                    <p>📅 September 2022 - December 2022</p>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal tech-stack">
                    <div>Java</div>
                    <div>Java Swing</div>
                    <div>SQLite</div>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal project-images">
                    <img src={shopping_1} alt="Shopping Java App Screenshot" />
                    <img src={shopping_2} alt="Shopping Java App Screenshot" />
                    <img src={shopping_3} alt="Shopping Java App Screenshot" />
                    <img src={shopping_4} alt="Shopping Java App Screenshot" />
                  </div>
                  <p>
                    • Lead developer on a collaborative group project where we
                    developed an ”Amazon” type of shopping application with
                    buyer, seller, and administrator portals each with their own
                    special features.
                  </p>
                  <p>
                    • Utilized design patterns such as singletons, factories,
                    and OOP principles to efficiently design application and
                    Java Swing to structure UI elements
                  </p>
                </li>
                <li id="underwater-project">
                  <div className="flex justify-between">
                    <div className="list-header">
                      Wahoo Bay Underwater Drone Project
                    </div>
                    <p>📅 August 2022 - May 2023</p>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal tech-stack">
                    <div>Python</div>
                    <div>C</div>
                    <div>BlueROV</div>
                    <div>Raspberry Pi</div>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-normal project-images">
                    <img
                      src={bluerov}
                      alt="BlueROV Acoustic Project Screenshot"
                    />
                    <img
                      src={modem}
                      alt="BlueROV Acoustic Project Screenshot"
                    />
                    <img src={code} alt="BlueROV Acoustic Project Screenshot" />
                  </div>
                  <p>
                    • Developed with a group a wireless communication method
                    using a one-of-a-kind, low-size acoustic modem made by a
                    Ph.D. student at FAU
                  </p>
                  <p>
                    • Successfully developed Python scripts for data transfer
                    between the underwater drone and a transmitting acoustic
                    modem, as well as for data processing from the receiving
                    modem for application use.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer class="flex items-center justify-between flex-wrap bg-slate-50 p-6">
          <div class="flex items-center text-slate-900  mr-6">
            <span class="font-semibold text-xl tracking-tight">
              Made with <span class="wave">❤️</span> by Kelvin Dhoman -
              Copyright © 2023. All Rights Reserved.
            </span>
          </div>
          <div class="w-full footer-items block lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <div id="social-links">
                <a aria-label="Github" href="https://github.com/LaughinMann">
                  <img src={github_icon} alt="Github link" />
                </a>
                <a
                  aria-label="Linkedin"
                  href="https://www.linkedin.com/in/kelvin-dhoman-679a67207/"
                >
                  <img src={linkedin_icon} alt="Linkedin link" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
