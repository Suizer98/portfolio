import { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'

import '../../Colors.css'
import Modal from './Modal'
import classes from './Projects.module.css'

function ProjectJS({ img, alt, title, git, demo, tech, description }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setImageLoaded(true)
    }
    image.src = img
  }, [img])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={classes.work}>
      <div className={classes.imageWrapper}>
        {!imageLoaded && (
          <Blurhash hash="L03l5OWBofayofayj[ayayj[ayj[" width="100%" height="220px" />
        )}
        {imageLoaded && (
          <img
            className={classes.image}
            src={img}
            alt={alt}
            loading="lazy"
            onClick={openModal}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
      <div className={classes.info}>
        <h3>{title}</h3>
        <p className={classes.description}>{description}</p>
        <ul className={classes.list}>
          {tech.map((el, index) => (
            <li key={index} className={el.color}>
              {el.tech}
            </li>
          ))}
        </ul>
        <div className={classes.links}>
          <>
            <a className={classes.link} href={git} target="_blank" rel="noreferrer">
              Github
            </a>
            <a className={classes.link} href={demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          </>
        </div>
      </div>
      <Modal show={isModalOpen} img={img} alt={alt} onClose={closeModal} />
    </div>
  )
}

export default ProjectJS
