import React, { Component } from 'react';
import '../css/contacts.css';

export class Contacts extends Component {
  static displayName = Contacts.name;

  render () {
    return (
      <div name="vitCon" className="containerCon">
            <div className="contactsplace">
                <a className="contactunit" href="https://vk.com/id161099452" target="_blank" rel="noopener noreferrer">
                    <img className="contactsimg" src="https://i.ibb.co/4f65gcC/766-7662083-vk-icon-clipart-png-download-transparent-png.png"/>
                </a>

                <a className="contactunit" href="https://t.me/GentlePelMen" target="_blank" rel="noopener noreferrer">
                    <img className="contactsimg" src="https://i.ibb.co/M8HsCH6/telegram-g661048290-1920.png"/>
                </a>

                <a className="contactunit" href="https://join.skype.com/invite/Iv2Odfm8OAPy" target="_blank" rel="noopener noreferrer">
                    <img className="contactsimg" src="https://i.ibb.co/QNMxDW2/free-png-ru-753.png"/>
                </a>

            </div>
      </div>
    );
  }
}
