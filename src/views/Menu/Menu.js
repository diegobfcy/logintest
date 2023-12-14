import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import ApiService from '../../services/ApiService';

const Menu = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const dni = params.get('dni');
  const password = params.get('password');

  const [editTextValue, setEditTextValue] = useState('');
  const [result, setResult] = useState(null);

  const handleProcesarClick = async () => {
    try {
      const response = await ApiService.sendDataToApi(dni, editTextValue, password);

      setResult(response);

    } catch (error) {
      console.error('Error procesando datos:', error.message);
      alert('Error al procesar datos');
    }
  };

  return (
    <div>
      <Toolbar />
      <div className="container mt-6" style={{ marginTop: '100px' }}>
        <h2>Menu</h2>
        <p>DNI: {dni}</p>
        <p>Password: {password}</p>

        <div className="mt-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Ingrese nombre"
            value={editTextValue}
            onChange={(e) => setEditTextValue(e.target.value)}
          />

          <button
            type="button"
            className="btn"
            style={{ backgroundColor: '#099856', color: 'white' }}
            onClick={handleProcesarClick}
          >
            Procesar
          </button>

          {result && (
            <div className="mt-3">
              <p>Resultado: {result.concatenatedValue}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
