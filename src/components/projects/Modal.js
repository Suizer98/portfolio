import React from 'react'

import classes from './Modal.module.css'

const Modal = ({ show, img, alt, onClose }) => {
  if (!show) {
    return null
  }

  return (
    <div className={classes.modal} onClick={onClose}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={classes.close} onClick={onClose}>
          &times;
        </span>
        <img className={classes.modalImage} src={img} alt={alt} />
      </div>
    </div>
  )
}

export default Modal
