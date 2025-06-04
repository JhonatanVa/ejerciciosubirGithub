import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;