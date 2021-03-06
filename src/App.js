import React ,{ useEffect, useState }from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {

  const [latitude,setLatitude] = useState('');
  const [longitude,setLongitude] = useState('');
  const [github_username,setGithubUserName] = useState('');
  const [techs,setTechs] = useState('');

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const {latitude,longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) =>{
        console.log(err)
      },{
        timeout: 30000
      }
    )
  },[]);


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">

             <label htmlFor="geithub_username">Usuario do Github</label>
              <input name="geithub_username" id="geithub_username" required
              value ={github_username}
              onChange={e => setGithubUserName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required
              value ={techs}
              onChange={e => setTechs(e.target.value)}/>
            </div>

            <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude}
              onChange={e => setLongitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" 
              name="longitude" 
              id="longitude" 
              required value ={longitude}
              onChange={e => setLatitude(e.target.value)}/>
            </div>
            </div>
            <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7042627?s=460" alt =""/>

              <div className="user-info">
                <strong>Allef Sousa</strong>
                <span>Java, Kotlin,Android e IOS</span>
              </div>
            </header>
            <p>Graduado em Ciência da Computação/ Pós Graduado em Gestão de projetos/ Mobile Developer</p>
            <a href="https://github.com/allefsousa">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7042627?s=460" alt =""/>

              <div className="user-info">
                <strong>Allef Sousa</strong>
                <span>Java, Kotlin,Android e IOS</span>
              </div>
            </header>
            <p>Graduado em Ciência da Computação/ Pós Graduado em Gestão de projetos/ Mobile Developer</p>
            <a href="https://github.com/allefsousa">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7042627?s=460" alt =""/>

              <div className="user-info">
                <strong>Allef Sousa</strong>
                <span>Java, Kotlin,Android e IOS</span>
              </div>
            </header>
            <p>Graduado em Ciência da Computação/ Pós Graduado em Gestão de projetos/ Mobile Developer</p>
            <a href="https://github.com/allefsousa">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7042627?s=460" alt =""/>

              <div className="user-info">
                <strong>Allef Sousa</strong>
                <span>Java, Kotlin,Android e IOS</span>
              </div>
            </header>
            <p>Graduado em Ciência da Computação/ Pós Graduado em Gestão de projetos/ Mobile Developer</p>
            <a href="https://github.com/allefsousa">Acessar Perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
