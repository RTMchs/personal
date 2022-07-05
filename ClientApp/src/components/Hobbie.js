import React, { Component } from 'react';
import '../css/hobbies.css';

export class Hobbie extends Component {
  static displayName = Hobbie.name;

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div name="hob" className="container">
          <div className="backCon">
            <div className="backInner">
                <h1 className="backTitle">Снизу информация о моём хобби.</h1>
                <a className="alinkHob" href="/Hobbie/#bottom">
                    <img className="arrowHob" src="https://i.imgur.com/ZedvBXV.png" alt=""/>
                </a>
            </div>
          </div>

          <div className="hobInfo">
              <div className="containerHob">
                <h3 className="cGames">Компьютерные игры:</h3>
                <p><a name="bottom"></a></p>
                <h4 className="description"> 
                    Хотя я от них постепенно отказываюсь, они всё ещё являются частью моей жизни.
                    Когда мне ничего не хочется делать, я запускаю какую-нибудь видео-игру.
                </h4>
                <div className="block">

                <div className="blockUnit">
                        <img className="blockImage" src="https://i.imgur.com/cjUqxKh.png"/>
                        <h4 className="blockTitle"> Соревновательные игры </h4>
                        <div className="blockText"> Иногда генерируют мотивацию, но зачастую
                           погружают в уныние и безделие. </div>
                        </div>
                    
                    <div className="blockUnit">
                        <img className="blockImage" src="https://i.imgur.com/QBh2RLO.png"/>
                        <h4 className="blockTitle"> Развивающие игры: </h4>
                        <div className="blockText"> Такие приложения/сайты, как CodeWars, SQLore. Свободное время быстро кончается, но явно приносят пользу.</div>
                    </div>
                    <div className="blockUnit">
                        <img className="blockImage" src="https://i.imgur.com/tGD3UlU.png"/>
                        <h4 className="blockTitle"> Кооперативные игры: </h4>
                        <div className="blockText"> Свободного времени как и не бывало, но генерируют мотивацию и кучу эмоций. </div>
                    </div>
                </div>
                <h4 class="description"></h4>
                <a className="alinkHob" href="/Hobbie/#top">
                    <img className="arrowHob" src="https://i.imgur.com/17k4wjD.png" alt=""/>
                </a>
                </div>
            </div>
      </div>
    );
  }
}
