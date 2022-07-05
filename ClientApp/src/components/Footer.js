import React, { Component } from 'react';
import '../css/Footer.css'

export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
      <footer className="main-footer">
        <div className="containerFooter">
          <div className="col">
            <h4 className="titlefoot">Пишите мне: </h4>
            <div className="footerBlock">
              <h5 className="footerUnit">chesnokov_200@mail.ru</h5>
              <h5 className="footerUnit">https://discord.com/users/323175151812345856</h5>
              <h5 className="footerUnit">cstud117893@vyatsu.ru</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
