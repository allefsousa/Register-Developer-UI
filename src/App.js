import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';




function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">

             <label htmlFor="geithub_username">Usuario do Github</label>
              <input name="geithub_username" id="geithub_username" required/>
            </div>

            <div class="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">

            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
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
