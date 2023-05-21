import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

// https://gateway.marvel.com:443/v1/public/characters?apikey=d25a2b408a73fa32571500d8a4b920ef
// private key: fa91ae893d8743259dc4d1f90c37d181e7a478b3
// public key: d25a2b408a73fa32571500d8a4b920ef
// ts: 1
// 1fa91ae893d8743259dc4d1f90c37d181e7a478b3d25a2b408a73fa32571500d8a4b920ef
// hash: 1a813e49e0433924c877b430aa4e0412

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d25a2b408a73fa32571500d8a4b920ef&hash=1a813e49e0433924c877b430aa4e0412').then(response =>{
      setCharacters(response.data.data.results);
    }).catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header>
        <input type='text' placeholder='Find a Character'></input>
        <img className='logo-marvel' src='https://scontent.fmga3-2.fna.fbcdn.net/v/t1.18169-9/998558_604967956233177_396054649_n.png?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=UQ22tm9r_48AX8knlre&_nc_ht=scontent.fmga3-2.fna&oh=00_AfCEqcslXAE8AeAW5HRmo8atY2A2htdZf_xOMbgr4N-9Tw&oe=6490C824' alt='logo-marvel'></img>
      </header>
      <div>
        {characters.map(character => (
          <div>
            <img key={character.id} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt=''></img>
            <div>
              <p>{character.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
