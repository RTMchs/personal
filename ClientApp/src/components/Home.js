import React, { Component } from 'react';
import '../css/style.css';
import { Blocks } from './Blocks';

export class Home extends Component {
  static displayName = Home.name;


  render () {
    return (
      <div name="vit" className="container">
          <div className="backCon">
            <div className="backInner">
                <h1 className="backTitle">Приветствую!</h1>
                <p className="goDown">Снизу информация обо мне!</p>
                <a className="alink" href="#bottom">
                    <img className="arrow" src="https://i.imgur.com/ZedvBXV.png" alt=""/>
                </a>
            </div>
          </div>

        <div className="mainInfo">
                <p><a name="bottom"></a></p>
                <h3 className="aboutme">Обо мне:</h3>
                <div className="blocks">

                    <div className="blocksUnit">
                        <a href="https://ru.wiktionary.org/wiki/%D0%A4%D0%98%D0%9E" target="_blank" rel="noopener noreferrer">
                        <img className="blocksImage" src="https://i.imgur.com/ef25rlg.png"/>
                        </a> 
                        <h4 className="blocksTitle"> Меня зовут: </h4>
                        <div className="blocksText"> Чесноков Артем Сергеевич </div>
                    </div>

                    <div className="blocksUnit">
                        <a href="https://ru.wikipedia.org/wiki/7_%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8F" target="_blank" rel="noopener noreferrer">
                        <img className="blocksImage" src="https://i.imgur.com/aZ4rnVv.png"/>
                        </a>
                        <h4 className="blocksTitle"> Возраст: </h4>
                        <div className="blocksText"> Я родился 07.04.2003, мне 19 лет </div>
                    </div>

                    <div className="blocksUnit">
                        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2" target="_blank" rel="noopener noreferrer">
                        <img className="blocksImage" src="https://i.imgur.com/sHs6AJq.png"/>
                        </a>
                        <h4 className="blocksTitle"> Место проживания: </h4>
                        <div className="blocksText"> Город Киров, Кировская область </div>
                    </div>

                    <div className="blocksUnit">
                        <a href="https://ru.wikipedia.org/wiki/React" target="_blank" rel="noopener noreferrer">
                        <img className="blocksImage" src="https://i.imgur.com/ZRn3MIx.png"/>
                        </a>
                        <h4 className="blocksTitle"> Деятельность: </h4>
                        <div className="blocksText"> Изучаю HTML/CSS, JS, ReactJS, ASP.NET Core</div>
                    </div>
                </div>

                
                <div className="blocks">
                    <div className="blocksUnit">
                        { <a href="http://school-61.ru/#" target="_blank" rel="noopener noreferrer">
                        <img className="blocksImage" src="https://i.imgur.com/tgljenr.png"/>
                        </a> }
                        <h4 className="blocksTitle"> Среднее неполное: </h4>
                        <div className="blocksText"> Получил в МБОУ "СОШ с УИОП №61" города Кирова </div>
                    </div>
                    <div className="blocksUnit">
                        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80" target="_blank" rel="noopener noreferrer">
                        <img className="blocksImage" src="https://i.imgur.com/xT09vHh.png"/>
                        </a>
                        <h4 className="blocksTitle"> Люблю: </h4>
                        <div className="blocksText"> <b>Компьютер</b> и читать книги </div>
                    </div>
                    <div className="blocksUnit">
                        { <a href="https://www.vyatsu.ru/nash-universitet/obrazovatelnaya-deyatel-nost/kolledzh?" target="_blank" rel="noopener noreferrer">
                        <img className="blocksImage" src="https://i.imgur.com/Jtrpzmq.png"/>
                        </a> }
                        <h4 className="blocksTitle"> Студенчество: </h4>
                        <div className="blocksText"> Я учусь на 3 курсе в Колледже ВятГУ на специалиста по ИС. </div>
                    </div>
                    <Blocks />
                </div>
                <a className="alink" href="#top">
                    <img className="arrow" src="https://i.imgur.com/17k4wjD.png" alt=""/>
                </a>
            </div>
        </div>
    );
  }
}
