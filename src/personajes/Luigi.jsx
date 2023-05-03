import React from 'react'
import mario from '../img/R.jpg';
import img2  from '../img/luigi.jpg';
import princesa from '../img/p peach.jpg';
import dragon from '../img/bowser.jpg';
import dino from '../img/yoshi.jpg';
import toad from '../img/TOAD.jpg';
import Saludoluigi from '../audio/luigi/Yahoo.wav';
import Saludomario from '../audio/mario/yohu.wav';
import Saludoprincesa from '../audio/peach/si.wav';
import bowservoz from '../audio/bowser/miow.wav';
import dinos from '../audio/yoshi/ya.wav';
import toads from '../audio/toad/sav.wav';
import {useState} from 'react';
import vida from '../audio/1up.wav'


//mario------------------------
 const Luigi = () => { 
  const [show,setShow] = useState(0)
  const mariox = function(e){
    e.preventDefault()
    if(show !== 1){
    setShow(1)
    }else{
      setShow(0)
    }
  }
  
//luigi-----------------------------


const luigix = function(e){
  e.preventDefault()
  if(show !== 2){
  setShow(2)
  }else{
    setShow(0)
  }
}
//princesa---------------------------------

const rosado = function(e){
  e.preventDefault()
  if(show !== 3){
  setShow(3)
  }else{
    setShow(0)
  }
}


//bowserx-------------------------------------

const bowserx = function(e){
  e.preventDefault()
  if(show !== 4){
  setShow(4)
  }else{
    setShow(0)
  }
}

  //yoshix-----------------------------
  const yoshix = function(e){
    e.preventDefault()
    if(show !== 5){
    setShow(5)
    }else{
      setShow(0)
    }
  }

  //toadx------------------------------------

  const toadx = function(e){
    e.preventDefault()
    if(show !== 6){
    setShow(6)
    }else{
      setShow(0)
    }
  }


  const audioluigi = function(audio){
    const reproducir = new Audio(audio)
    reproducir.play() 
  }

  
  
      return (

        <>
        <section className='hola'> 
         <h1>PERSONAJES</h1>
          
           <article className='menu1'>

        <img className='pers' src={mario}  onClick={() => audioluigi(Saludomario)} height={300} />

        <form onSubmit={mariox}>
        <button href="#" className='boton'onClick={() => audioluigi(Saludomario)}>CONOCE A MARIO</button>
         </form>


        <img className='pers'src={img2} onClick={() => audioluigi(Saludoluigi) } height={300}/>
        <form onSubmit={luigix}>
        <button href="#" className='boton2'onClick={() => audioluigi(Saludoluigi) }>CONOCE A LUIGI</button>
        </form>


        <img className='pers'src={princesa} onClick={() => audioluigi(Saludoprincesa)} height={300}/>
        <form onSubmit={rosado}>
        <button href="#" className='boton3'onClick={() => audioluigi(Saludoprincesa)}>CONOCE A PEACH</button>
        </form>


        <img className='pers'src={dragon}   onClick={() => audioluigi(bowservoz)}height={300}/>
        <form onSubmit={bowserx}>
        <button href="#" className='boton4'onClick={() => audioluigi(bowservoz)}>CONOCE A BOWSER</button>
        </form>


        <img className='pers'src={dino}  onClick={() => audioluigi(dinos)} height={300}/>
        <form onSubmit={yoshix}>
        <button href="#" className='boton5' onClick={() => audioluigi(dinos)}>CONOCE A YOSHI</button>
        </form>

        <img className='pers'src={toad} onClick={() => audioluigi(toads)} height={300}/>
        <form onSubmit={toadx}>
        <button href="#" className='boton6'onClick={() => audioluigi(toads)}>CONOCE A TOAD</button>
        </form>
        </article>

        </section>


{show == 1 ? <article  className='pr'>

<h1>Mario:</h1>

<p> es el personaje principal y el héroe de la serie de juegos. Es un fontanero italiano con un bigote grueso y viste una gorra y un peto azul. Mario es conocido por su capacidad para saltar, correr y aplastar enemigos. También tiene una variedad de power-ups, como la Flor de Fuego y la Estrella, que le dan habilidades especiales.</p>

<form onSubmit={mariox}>

<button  onClick={() => audioluigi(vida)}>regresar </button>
  </form>
  </article> : null}

  {show == 2? <article  className='pr'>
    <h1>Luigi:</h1>

    <p>es el hermano de Mario y su fiel compañero. Es similar a Mario en términos de apariencia, pero es más alto y delgado. Luigi es conocido por ser un poco tímido y nervioso, pero también es muy valiente y leal a su hermano.</p>
    <form onSubmit={luigix}>
    <button onClick={() => audioluigi(vida)}>regresar </button>
   
    </form>


  </article> : null}


  {show == 3? <article  className='pr'>
    <h1>Princesa Peach:</h1>
    <p> es la princesa del Reino Champiñón y una de las protagonistas de la serie. Es conocida por su belleza y su habilidad para gobernar su reino con sabiduría y gracia. Peach es a menudo secuestrada por el villano Bowser y Mario tiene que rescatarla.</p>
    <form onSubmit={rosado}>
    <button onClick={() => audioluigi(vida)}>regresar </button>
    </form>


  </article> : null}



  {show == 4? <article  className='pr1'>
    <h1>Bowser: </h1>
    <p>es el principal antagonista de la serie de Mario Bros. Es una gran tortuga con dientes afilados y aliento de fuego. Bowser es conocido por secuestrar a la Princesa Peach y tratar de apoderarse del Reino Champiñón. A menudo se enfrenta a Mario en combate..</p>
    <form onSubmit={bowserx}>
    <button onClick={() => audioluigi(vida)}>regresar </button>
    </form>

  </article> : null}



  {show == 5? <article  className='pr2'>
    <h1>Yoshi:</h1>
    <p> es una criatura amistosa y leal que ayuda a Mario en su misión. Es un dinosaurio de color verde con una lengua larga y flexible. Yoshi es conocido por su habilidad para comer enemigos y convertirlos en huevos.</p>
    <form onSubmit={yoshix}>
    
    <button onClick={() => audioluigi(vida)}>regresar </button>
    </form>

  </article> : null}





  {show == 6? <article  className='pr3'>
    <h1>Toad:</h1>
    <p> es un personaje amigable que vive en el Reino Champiñón. Es un pequeño hongo con una cabeza grande y redonda. Toad a menudo ayuda a Mario en su misión, proporcionándole consejos y objetos útiles.</p>
    <form onSubmit={toadx}>
    <button onClick={() => audioluigi(vida)}>regresar </button>
    </form>
</article> : null}


        </>
        
      );
    
}
export default Luigi