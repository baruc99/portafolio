import React from 'react';
import Modal from 'react-modal';
import styles from './form.module.css'; // Importa los estilos CSS
import Image from 'next/image';
import { IoClose } from 'react-icons/io5'

function CustomModal({ isOpen, closeModal }) {

  const modal = document.querySelector('.ReactModal__Overlay');
  const modalContent = document.querySelector('.ReactModal__Content');

  if (modalContent) {
    //eliminar estilos
    modalContent.removeAttribute('style');
  }

  if (modal) {
    modal.style.zIndex = "10";
    modal.style.display = 'flex';
    modal.style.flexDirection = 'row';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="send-email"
    >

      <form className="form borde-purple">
        <div className="close-icon" onClick={closeModal}>
          <IoClose />
        </div>
        <label className='mt-5'>
          <input className="input borde-purple" type="text" placeholder="" required />
          <span>Mi nombre</span>
        </label>

        <label>
          <input className="input borde-purple" type="email" placeholder="" required />
          <span>El correo</span>
        </label>

        <label>
          <input className="input borde-purple" type="text" placeholder="" required />
          <span>La idea</span>
        </label>
        <label>
          <textarea className="input borde-purple" type="text" placeholder="" required />
          <span>Te cuento mi proyecto</span>
        </label>
        <button className="submit">
          Envialo
          <Image
            src={"/send.svg"}
            alt={`send`}
            width={40}
            height={40}
            style={{ marginLeft: "1rem;" }}
          />
        </button>

      </form>
    </Modal>
  );
}


export default CustomModal;
