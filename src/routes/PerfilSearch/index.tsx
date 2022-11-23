import './styles.css';

import { useState } from 'react';
import axios from 'axios';

type FormData = {
  perfil: string;
};

type Information = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const PerfilSearch = () => {
  const [information, setInformation] = useState<Information>();

  const [formData, setFormData] = useState<FormData>({
    perfil: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`http://api.github.com/users/${formData.perfil}`)
      .then((response) => {
        setInformation(response.data);
      })
      .catch((error) => {
        setInformation(undefined);
      });
  };

  return (
    <div className="main-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="perfil"
              value={formData.perfil}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {information ? (
        <div className="container information-container">
          <div className="information-card">
            <div className="card-img">
              <img src={information.avatar_url} alt="" />
            </div>
            <div className="card-txt">
              <h1>Informações</h1>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Perfil:</p>
                </div>
                <div>
                  <p className="result-description-perfil">{information.url}</p>
                </div>
              </div>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Seguidores:</p>
                </div>
                <div>
                  <p className="result-description">{information.followers}</p>
                </div>
              </div>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Localidade:</p>
                </div>
                <div>
                  <p className="result-description">{information.location}</p>
                </div>
              </div>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Nome:</p>
                </div>
                <div>
                  <p className="result-description">{information.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : <h2 className='error-user'>Erro ao buscar usuário</h2>
    }
    </div>
  );
};

export default PerfilSearch;