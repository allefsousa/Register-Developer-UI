import React ,{ useEffect }from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        console.log(position)
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
              <input name="geithub_username" id="geithub_username" required/>
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
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
