import React, { Component } from 'react';
import '../css/style.css';

export class Blocks extends Component {
  static displayName = Blocks.name;

  render () {
    return (
             <div className="blocksUnit">
                <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0" target="_blank" rel="noopener noreferrer">
                <img className="blocksImage" src="https://i.imgur.com/CYY7BZe.png"/>
                </a> 
                <h4 className="blocksTitle"> Текущая Цель: </h4>
                <div className="blocksText"> Стать уверенным WEB-разработчиком и надёжным человеком. </div>
            </div>
    );
  }
}