/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalTrainingTraining from './ModalTrainingTraining';
import ModalTrainingWir from './ModalTrainingWir';

//import { useCustomStyles } from './ModalTraining.style';
import '../animation.css';

class ModalTraining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 1440,
      height: 1200,
    };

    this.form = React.createRef();
    this.stats = {
      allPages: ['Training', 'Wir'],
      page: this.props.page,
      animated: 0,
    };

    this.debug = true;
    this.apdx = 'Train';

    // STYLES
    //this.style = useCustomStyles({ mq: this.props.mq, colors: this.props.colors });
    this.colors = this.props.colors;
    this.mq = this.props.mq;

    this.style = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh - 3.5vh)', // 2rem
      zIndex: '1051',
      position: 'relative',
      overflow: 'hidden',
      margin: '1.75vh auto',

      '& .span_vis': {
        display: 'block',

        [this.mq[1]]: {
          display: 'none',
        },
      },

      '& .modal-content': {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          width: '100%',

          '& .Training, .Wir': {
            //width: '100%',
            //position: 'absolute',

            '& .modal-col': {
              '& h1': {
                fontSize: '10vh',
                color: 'white',
                textShadow: `0px 0px 5px ${this.bgRed}`,
                position: 'relative',
                paddingLeft: '2vh',
              },

              '& h2': {
                fontSize: '2vh',
                fontWeight: 'bold',
                color: this.typoRed,
                marginBottom: '0.5vh',
                position: 'relative',
                textAlign: 'center',
                textShadow: '0 0 2px white',
              },

              '& h5': {
                fontSize: '1.25vh',
                fontWeight: 'bold',
                color: this.bgWhite,
                marginBottom: '0.5vh',
                position: 'relative',
                textAlign: 'center',
              },

              '& p': {
                fontSize: '1.8vh',
                margin: '0vh 15px 0vh 0px',
                textAlign: 'justify',
                position: 'relative',
                zIndex: '1',
              },
            },
          },
        },
      },
    };

    // CONTENT
    this.contentWir = {
      title: 'Wir',
      text: `Der Name unseres Dojo OGURA nimmt Bezug auf Ogura Tsuneyoshi(* 1928; † 2007), japanischer Karatemeister (Shotokan, Goju ryu) aus Kofu, 10. Dan. Dieser war ab dem Jahr 1973 der Lehrer des französischen Kampfkunstexperten Roland Habersetzer. Der Name unseres Dojo soll die Wertschätzung für den Menschen Ogura und seinen „Schüler“ Habersetzer zum Ausdruck bringen. Die Karateka des OGURA DOJO sind Mitglied im Budoforschungszentrum Tengu Institut von Shihan Roland Habersetzer und betreiben die Stilrichtung Tengu ryu. Neben dem Karate bieten wir in unserem Dojo TaiJi und QiGong an. Im TaiJi trainieren wir Faust, Fächer und Schwertformen – Schwerpunktmäßig aus dem Yang-Stil. Die Formen die wir im QiGong üben stammen überwiegend von dem chinesichen Professor Ding HongYu. Das OGURA DOJO ist organisatorisch beim Turn- und Sportverein Traunreut angegliedert. Unsere Abteilungsleiter ist Hans-Jürgen Groiß.`,
      tabs: [
        {
          head1: 'Johann Boxler',
          head2: '1ter Kassier',
          head3: '3. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Alex Callegari',
          head2: 'Trainer Karate.Taiji.Qigong',
          head3: '6. DAN Tengu Ryu',
          img: 'url(./training_pic_2.png)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Ulrike Geuder',
          head2: '2ter Vorstand.Trainerin Karate',
          head3: '5. DAN Tengu Ryu',
          img: 'url(./training_pic_3.png)',
          img_pos: '50% 10%',
        },
        {
          head1: 'Hans-Jürgen Groiß',
          head2: '1ter Vorstand',
          head3: '2. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Alex Hetzner',
          head2: 'Schriftführer',
          head3: '1. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Wolfgang Liedke',
          head2: '2ter Kassier',
          head3: '4. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Erika Rudl',
          head2: 'Trainerin Karate.Kinder.Jugendliche',
          head3: '1. DAN Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
      ],
    };

    this.contentTraining = {
      title: 'Training',
      schedule: {
        title: 'Wann?',
        lesson: [
          {
            day: 'Montag',
            time: '18:20 - 20:00',
            topic: 'Taiji',
          },
          {
            day: 'Montag',
            time: '20:00 - 22:00',
            topic: 'Karate (Erwachsene)',
          },
          {
            day: 'Mittwoch',
            time: '17:00 - 18:30',
            topic: 'Karate (Kinder/Jugendliche)',
          },
          {
            day: 'Freitag',
            time: '20:00 - 22:00',
            topic: 'Karate (Erwachsene)',
          },
        ],
      },
      map: {
        title: 'Wo?',
        address: 'Sonnenschule Traunreut - Martin-Luther-Straße - 83301 Traunreut',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.9166880710771!2d12.595441829286242!3d47.962167896732744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU3JzQzLjgiTiAxMsKwMzUnNDUuNiJF!5e0!3m2!1sen!2sde!4v1619885924254!5m2!1sen!2sde',
      },
      text: {
        title: 'Was?',
        text: 'Zum Kennenlernen gibt es natürlich die Möglichkeit eines kostenlosen Probetrainings. Zum Training am Besten in lockerer Sportbekleidung erscheinen. Sportanzüge und Equipment kann bei Bedarf vor Ort bestellt werden.',
      },
      beitrag: {
        title: 'Beitrag?',
        items: [
          {
            heading: ['TuS Traunreut', '(Karate und Taiji)'],
            listing: ['unter 18J: 60€/J', 'über 18J: 120€/J'],
          },
          {
            heading: ['Verband CRB', '(Tengu Ryu)'],
            listing: ['Neuaufnahme: 31€/J', 'Verlängerung: 22€/J'],
          },
          {
            heading: ['Verband DKV', '(Karate)'],
            listing: ['18€/J für Kinder (bis 13J)', '23€/J für Jugendl. & Erwachsene'],
          },
        ],
      },
    };

    this.contentNav = {
      upDown: 1,
      navItems: ['Training', 'Wir'],
    };
  }

  componentDidMount() {
    if (this.debug) console.log('ModalTraining/compDidMount');
    window.addEventListener('resize', this.updateDimensions);
    document.getElementById('idModalTraining').addEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalTraining').addEventListener('hidden.bs.modal', this.onHideModal);
    document.querySelector(`.Training`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Wir`).addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalTraining/componentWillUnmount');
    window.removeEventListener('resize', this.updateDimensions);
    document.getElementById('idModalTraining').removeEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalTraining').removeEventListener('hidden.bs.modal', this.onHideModal);
    document.querySelector(`.Training`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Wir`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    if (this.debug) console.log('ModalTraining/onAnimationEnd', this.stats.animated);
  };

  onShowModal = () => {
    this.updateDimensions();
    this.updateHx();
    this.stats.page = this.props.page;
    var page = this.stats.page;
    if (this.debug) console.log('ModalTraining/onShowModal', this.stats);
    if (page === 'Wir') {
      document.querySelector('.Training').classList.add('d-none');
      document.querySelector('.Wir').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.WirBtn`).classList.add('active');
      document.querySelector(`.TrainingBtn`).classList.remove('active');
    } else if (page === 'Training') {
      document.querySelector('.Training').classList.remove('d-none');
      document.querySelector('.Wir').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.WirBtn`).classList.remove('active');
      document.querySelector(`.TrainingBtn`).classList.add('active');
    }
  };

  onHideModal = () => {
    if (this.debug) console.log('ModalTraining/onHideModal');
    // reset single pages
    document.querySelector('.Training').classList.remove('slide-out-top');
    document.querySelector('.Training').classList.remove('slide-in-bottom');
    document.querySelector('.Wir').classList.remove('slide-out-top');
    document.querySelector('.Wir').classList.remove('slide-in-bottom');
    document.querySelector('.Wir').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'Training';

    // reset navigation
    document.querySelector('.TrainingBtn').classList.add('active');
    document.querySelector('.WirBtn').classList.remove('active');
  };

  clickUpDown = (dir) => {
    if (this.debug) console.log('ModalTraining/clickUpDown', dir);

    // find index of current page
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    // trigger nextItem with requested page
    if (idx === 0 && dir === 'down') {
      this.nextItem(this.stats.allPages[idx + 1]);
    } else if (idx === 0 && dir === 'up') {
      this.stats.animated = 0;
      return 0;
    } else if (idx === this.stats.allPages.length - 1 && dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (idx === this.stats.allPages.length - 1 && dir === 'down') {
      this.stats.animated = 0;
      return 0;
    } else if (dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (dir === 'down') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx + 1]);
    }
  };

  nextItem = (button) => {
    if (this.debug) console.log('ModalTraining/nextItem', button);
    // identify the page to be shown
    document.querySelector(`.${this.stats.page}`).classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}Btn`).classList.remove('active');
    document.querySelector(`.${this.stats.page}`).classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.${this.stats.page}`).classList.remove('d-none');
    } catch (e) {}

    document.querySelector(`.${this.stats.page}`).classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}Btn`).classList.add('active');
    document.querySelector(`.${this.stats.page}`).classList.add('slide-in-bottom');

    // check if end of list start or end -> in case reset arrow from active
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    if (idx === 0) {
      document.querySelector(`.upArrow${this.apdx}`).classList.remove('active');
      document.querySelector(`.downArrow${this.apdx}`).classList.add('active');
    } else if (idx === this.stats.allPages.length - 1) {
      document.querySelector(`.upArrow${this.apdx}`).classList.add('active');
      document.querySelector(`.downArrow${this.apdx}`).classList.remove('active');
    } else {
      document.querySelector(`.upArrow${this.apdx}`).classList.add('active');
      document.querySelector(`.downArrow${this.apdx}`).classList.add('active');
    }
  };

  updateHx = () => {
    //this.updateDimensions();
    if (this.debug) console.log('ModalTraining/updateHx');
    // H1
    this.style['& .modal-content']['& .modal-row']['& .Training, .Wir']['& .modal-col'][
      '& h1'
    ].fontSize = 120 * (this.state.width / 1440) * (this.state.height / 1200) + 18 + 'px';

    // H2
    this.style['& .modal-content']['& .modal-row']['& .Training, .Wir']['& .modal-col'][
      '& h2'
    ].fontSize = 8 * (this.state.width / 1440) * (this.state.height / 1200) + 12 + 'px';

    // p
    this.style['& .modal-content']['& .modal-row']['& .Training, .Wir']['& .modal-col']['& p'].fontSize =
      8 * (this.state.width / 1440) * (this.state.height / 1200) + 12 + 'px';
  };

  updateDimensions = () => {
    var w = document.querySelector('.Training')?.offsetWidth;
    var h = document.querySelector('.Training')?.offsetHeight;
    if (w !== 0)
      this.setState({
        width: w,
        height: h,
      });
    if (this.debug) console.log('ModalTraining/updateDimensions', w, h);
  };

  render() {
    if (this.debug) console.log('ModalTraining/render', this.stats, this.props);
    this.updateHx();

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalTraining"
          tabIndex="-1"
          aria-labelledby="ModalTrainingLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.style}
          >
            <div className="modal-content">
              <div className="modal-row d-flex flex-row h-100 align-items-center">
                <ModalInNavigation
                  clickUpDown={this.clickUpDown}
                  nextItem={this.nextItem}
                  colors={this.props.colors}
                  config={this.contentNav}
                  mq={this.mq}
                  apdx={this.apdx}
                />
                <ModalTrainingTraining
                  contentTraining={this.contentTraining}
                  mq={this.mq}
                  colors={this.props.colors}
                />
                <ModalTrainingWir
                  contentWir={this.contentWir}
                  mq={this.mq}
                  colors={this.props.colors}
                  //style={this.styleContentWir}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalTraining;
