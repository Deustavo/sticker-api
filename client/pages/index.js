import { useState } from 'react'
import Head from 'next/head'
import api from '../services/api';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result.split(",")[1])
    }
    let base64image = reader.readAsDataURL(file);
    
  }

  const sendImage = async (e, image, phoneNumber) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await api.post(`sticker`,{
        phoneNumber,
        image
      });
      toast.success("Sticker enviado com sucesso!");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Falha ao enviar sticker :(");
      setLoading(false);
    }

  }
  

  return <>
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
          {loading ?
            <div className="container-loading">
              <h2 className="banner-title" style={{marginBottom: 0}}>Preparando seu stricker</h2>
              <ReactLoading type={'bubbles'} color={'#80FFA4'} height={300} width={300} />
            </div>:
            <form onSubmit={(e) => sendImage(e, image, phoneNumber)}>
              <p className="form-title-input">Seu número do Whatsapp</p>
              <input className="form-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
              <p className="form-title-input">A imagem que deseja receber como sticker</p>
              <input type="file" className="form-input" onChange={(e) => onChange(e)}/>
              <br />
              {phoneNumber === '' || image === undefined ?
                <button className="button-main disabled" disabled>Receber sticker</button> :
                <button className="button-main button-hover" >Receber sticker</button>
              }
            </form>
          }
        </div>

      </div>
      <script src="index.js"></script>
    </body>
    <ToastContainer />
  </>
}
