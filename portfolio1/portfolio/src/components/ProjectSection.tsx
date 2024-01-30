'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
  {
    name: 'Online BookStore(kitaab)',
    description:
      'Kitaab is a web app (Demo) that is created as online book store where you can buy Your wanted books',
    image: '/Kitaab Project.png',
    github:
      'https://github.com/VirajChauhan07/All-Projects/tree/a25f9e66ca8c461c4e2b1b9dcad9148e7317c99b/BookStore',
    link: 'https://all-projects-kitaab.vercel.app',
  },
  {
    name: 'Weather Application',
    description: 'Application help to know the Weather of the city',
    image: '/Weather-App.png',
    github:
      'https://github.com/VirajChauhan07/WebDevelopment/tree/main/JavaScript/WeatherApp',
    link: 'https://weather-app-ebon-nu.vercel.app',
  },
  {
    name: 'Currency Convertor',
    description:
      'Application help to convert from one currency to another currency',
    image: '/CurrencyConvertor.png',
    github:
      'https://github.com/VirajChauhan07/WebDevelopment/tree/main/JavaScript/CurrencyConvertor',
    link: 'https://currency-convertor-henna.vercel.app',
  },
  {
    name: 'Rock-Paper-Scissors',
    description: 'Game for a Solo person For a Refreshment',
    image: '/R&P&S.png',
    github:
      'https://github.com/VirajChauhan07/WebDevelopment/tree/main/JavaScript/R%26P%26S_Project',
    link: 'https://rock-paper-scissor-theta-nine.vercel.app',
  },
  {
    name: 'Music Player',
    description: 'Music player for short Refreshments',
    image: '/Music-Player.png',
    github:
      'https://github.com/VirajChauhan07/WebDevelopment/tree/main/JavaScript2/MusicPlayer',
    link: 'music-player-mauve-xi.vercel.app',
  },
  {
    name: 'Advanced Portfolio',
    description: 'Complete Description About myself and education',
    image: '/Advanced portfolio.png',
    github:
      'https://github.com/VirajChauhan07/WDprojectgroup3/tree/6e45ffb793b3e004aa1bc41221d56a45ccb993c2/portfolio1/portfolio',
    link: 'https://advanced-portfolio-seven.vercel.app',
  },
  {
    name: 'TinDog Website',
    description:
      'Basic Website for Dog (practise for creating front end website)',
    image: '/TinDog_Image.png',
    github:
      'https://github.com/VirajChauhan07/projectgroup2/tree/dc1917e067282967cf964a2c1fcc20c008235c2b/TinDog%20Completed%20Website',
    link: 'https://tindog-website-omega.vercel.app',
  },
  {
    name: 'DrumKit Project',
    description: 'It is a basic javacript project of playing Drum kit.',
    image: '/drumkit project.png',
    github:
      'https://github.com/VirajChauhan07/All-Projects/tree/a25f9e66ca8c461c4e2b1b9dcad9148e7317c99b/DrumKit',
    link: 'https://drumkit-two-vert.vercel.app',
  },
  {
    name: 'Dice Challenge',
    description:
      'It is a simple two player game at refersh dice roll and winner decides',
    image: '/Dice project.png',
    github:
      'https://github.com/VirajChauhan07/All-Projects/tree/a25f9e66ca8c461c4e2b1b9dcad9148e7317c99b/Dice%20Challenge',
    link: 'https://dice-challenge-seven.vercel.app',
  },
  {
    name: 'Button Game',
    description: 'It is a simple game project ',
    image: '/Button game.png',
    github:
      'https://github.com/VirajChauhan07/WDprojectgroup3/tree/6e45ffb793b3e004aa1bc41221d56a45ccb993c2/Project%20game%20of%20press%20button',
    link: 'https://button-game-zeta.vercel.app',
  },
  {
    name: 'Learning About Portfolio',
    description:
      'creating portfolio for basic understanding and structural point of view ',
    image: '/Simpleportfolio.png',
    github:
      'https://github.com/VirajChauhan07/WDprojectgroup3/tree/6e45ffb793b3e004aa1bc41221d56a45ccb993c2/Simple%20Portfolio',
    link: 'https://learningaboutportfolio.vercel.app',
  },
]

const projectSection = () => {
  return (
    <section id='projects'>
      <h1 className='text-center justify-center text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto  my-4 bg-teal-500 border-0 rounded' />
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px -0px'>
                <div className='flex flex-col animate-slideUpCubicBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className='mt-8 md:w-1/2'>
                    <Link href={project.link} target='_blank'>
                      <Image
                        className='rounded-xl shadow-xl hover:opacity-70'
                        src={project.image}
                        alt=''
                        height={1000}
                        width={1000}
                      />
                    </Link>
                  </div>
                  <div className=' mt-12 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl  leading-7 mb-4  text-neutral-600 dark:text-neutral-600 '>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4 '>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default projectSection
