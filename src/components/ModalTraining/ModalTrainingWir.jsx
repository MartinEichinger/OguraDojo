/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import React from 'react';

const ModalTrainingWir = ({ contentWir, mq, colors }) => {
  const style = {
    '&.Wir': {
      width: '100%',
      position: 'absolute',

      '& .modal-col': {
        width: 'calc(100% - 51px)',

        [mq[2]]: {
          width: 'calc(100% - 39px)',
        },

        [mq[1]]: {
          width: 'calc(100% - 34px)',
        },

        [mq[0]]: {
          width: 'calc(100% - 29px)',
        },

        '& .modal-up': {
          height: '90vh',
          backgroundColor: 'white',
          borderRadius: '5px',

          '& .bg-training': {
            height: '90vh',
            width: 'calc(100% - 51px)',
            backgroundImage: 'url(./training_pic_1.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '5px',
            boxShadow: 'inset 0px 25px 30px 30px white',
            filter: 'blur(4px)',
            position: 'absolute',

            [mq[2]]: {
              width: 'calc(100% - 39px)',
            },

            [mq[1]]: {
              width: 'calc(100% - 34px)',
            },

            [mq[0]]: {
              width: 'calc(100% - 29px)',
            },
          },

          '& .table_': {
            padding: '0 2vh 2vh',
            height: 'calc(90vh - 12vh)',

            [mq[1]]: { padding: '0.5vh' },

            '& .rect': {
              position: 'relative',
              marginLeft: '2vh',
              width: 'calc(100% - 2vh)',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '5px',
              padding: '1vh',
              overflow: 'auto',

              [mq[2]]: {
                width: 'calc(100%)',
                padding: '1vh',
                margin: '0',
              },

              [mq[1]]: {
                width: 'calc(100%)',
                padding: '1vh',
                margin: '0',
              },
            },

            '& .cards': {
              position: 'relative',
              marginLeft: '2vh',
              width: 'calc(100% - 2vh)',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '5px',
              padding: '1vh',
              overflow: 'auto',

              [mq[2]]: {
                width: 'calc(100%)',
                padding: '1vh',
                margin: '0',
              },

              [mq[1]]: {
                width: 'calc(100%)',
                padding: '1vh',
                margin: '0',
              },

              '& .body': {
                height: '320px',
                width: '250px',
                borderRadius: '5px',
                position: 'relative',
                margin: '5px',

                '& .image': {
                  width: '100%',
                  height: '55%',
                  borderRadius: '5px',
                  backgroundSize: 'cover',
                  //backgroundImage: 'url(./training_pic_2.png)',
                },

                '& .text': {
                  width: '100%',
                  height: '40%',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="Wir d-none" css={style}>
      <div className="modal-col d-flex flex-column h-100">
        <div className="modal-up">
          <div className="bg-training"></div>
          <h1 className="big">{contentWir.title}</h1>
          <div className="table_ d-flex flex-column justify-content-around" css={style}>
            <div className="rect h31 scroll_">
              <p className="mb-2">{contentWir.text}</p>
            </div>
            <div className="cards d-flex flex-row flex-wrap justify-content-around h40 scroll_">
              {contentWir.tabs.map((item, i) => {
                return (
                  <div className="body d-flex flex-column justify-content-between" key={i}>
                    <div
                      className="image"
                      style={{
                        backgroundImage: item.img,
                        backgroundPosition: item.img_pos,
                      }}
                    ></div>
                    <div className="text d-flex flex-column align-items-center">
                      <h2>{item.head1}</h2>
                      <h5>{item.head2}</h5>
                      <p className="white text-center mb-2 small">{item.head3}</p>
                      <img src="email_24px_outlined.png" alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTrainingWir;
