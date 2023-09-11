import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './form.module.css'; // Importa los estilos CSS
import Image from 'next/image';
import { IoClose } from 'react-icons/io5'
import axios from 'axios';
import { CAlert } from '@coreui/react';

function LoadingSend() {
  return (
    <div className="loader">
      <div className="blackhole">
        <div className="blackhole-circle"></div>
        <div className="blackhole-disc"></div>
      </div>

      <div className="curve">
        <svg viewBox="0 0 500 500">
          <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
          <text width="500">
            <textPath xlinkHref="#loading">
              Enviando...
            </textPath>

          </text>
        </svg>
      </div>
    </div>
  )
}

function CustomModal({ isOpen, closeModal }) {

  const [alertInfo, setAlertInfo] = useState({
    color: '', // Color por defecto
    message: '',
  });

  const [visible, setVisible] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    idea: '',
    proyecto: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = JSON.stringify(formData)
    console.log(JSON.parse(data));


    setIsSending(true);

    const btnSend = document.querySelector("#sendForm");
    const btnTemp = btnSend;
    btnSend.innerHTML = "";

    try {
      const response = await axios.post('/api/sendEmail', formData);
      const { color, msg } = response.data;

      setAlertInfo({
        color: color,
        message: msg,
      });

      console.log('Correo enviado con éxito form');
      setIsSending(false);
      setVisible(true);

      // Cerrar el modal después de 2 segundos
      setTimeout(() => {
        closeModal();
      }, 2000);

      // Ocultar el mensaje de alert después de 20 segundos
      setTimeout(() => {
        setVisible(false);
      }, 20000);
    } catch (error) {
      setIsSending(false);
      setVisible(true);
      console.error('Error al enviar el correo: form', error);

      // Mostrar el mensaje de error en el alert
      setAlertInfo({
        color: 'danger',
        message: error.message || 'Ha ocurrido un error al enviar el correo.',
      });

      // Ocultar el mensaje de alert después de 20 segundos
      setTimeout(() => {
        setVisible(false);
      }, 20000);
    }



  };


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
      appElement={typeof window !== 'undefined' && document.getElementById('Contactanos')}
    >

      <form className="form borde-purple" onSubmit={handleSubmit}>
        <div className="close-icon" onClick={closeModal}>
          <IoClose />
        </div>
        <label className='mt-5'>
          <input className="input borde-purple" name="nombre" value={formData.nombre} onChange={handleInputChange} type="text" placeholder="" required />
          <span>Mi nombre</span>
        </label>

        <label>
          <input className="input borde-purple" name="correo" value={formData.correo} onChange={handleInputChange} type="email" placeholder="" required />
          <span>El correo</span>
        </label>

        <label>
          <input className="input borde-purple" name="idea" type="text" value={formData.idea} onChange={handleInputChange} placeholder="" required />
          <span>La idea</span>
        </label>
        <label>
          <textarea className="input borde-purple" name="proyecto" value={formData.proyecto} onChange={handleInputChange} type="text" placeholder="" required />
          <span>Te cuento mi proyecto</span>
        </label>
        {isSending ? (
          <div className="loader-container">
            <LoadingSend />
          </div>
        ) : (
          <button id="sendForm" className="submit" type="submit">
            Envialo
            <Image
              src={"/send.svg"}
              alt={`send`}
              width={40}
              height={40}
              style={{ marginLeft: "1rem" }}
            />
          </button>
        )}


        {visible && (
          <CAlert color={alertInfo.color}>
            {alertInfo.message}
          </CAlert>
        )}

      </form>
    </Modal>
  );
}


export default CustomModal;
