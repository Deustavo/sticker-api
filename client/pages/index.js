
import { useState } from 'react'
import Head from 'next/head'

import api from '../services/api';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');

  function sendImage(phoneNumber, image) {
    api.post(`sticker`,
      {
        phoneNumber: phoneNumber,
        image: image
      }).then((response) => {
        console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      
      <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="css/index.css" />
          <title>Whatsapp Sticker</title>
      </Head>

      <body>
          <div className="landing-page">
              <div className="landing-page-banner">
                  <h1 className="banner-title">Faça seu sticker e o receba direto em seu Whatsapp!!</h1>
                  <img src="image.png" alt="imagem" />
              </div>
              <div className="landing-page-form">
                  <form action={sendImage(phoneNumber, image)}>
                      <p className="form-title-input">Seu número do Whatsapp</p>
                      <input className="form-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                      <p className="form-title-input">A imagem que deseja receber como sticker</p>
                      <input type="file" className="form-input" value={image} onChange={(e) => setImage(e.target.value)}/>
                      <br />
                      <button>Enviar</button>
                  </form>
              </div>
          </div>
          <script src="index.js"></script>
      </body>

    </>
  )
}
