import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';


const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10rem;
    flex-direction: column;
`

const Boton = styled.button`
        background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
        background-size: 300px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        margin-top: 3rem;
        padding: 1rem 3rem;
        font-size: 2rem;
        border: 2px solid black;
        transition: backgrpund-size .8s ease;

        :hover {
            cursor: pointer;
            background-size: 400px;
        }
`;

function App () {

    //State de frases

    const [ frase , guardarFrase ] = useState({});

    

    const consultarAPI = () => {
        const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const frase = api.then(respuesta => respuesta.json())
        frase.then(resultado => guardarFrase(resultado[0]))
    }

    //Cargar una frase
    useEffect( () => {
        consultarAPI() }, []
    );

    return(
        <Contenedor>
     
            <Frase
            frase={frase}
            />
       
       
        <Boton
        onClick={consultarAPI} 
        >
            Obtener Frase
        </Boton>

        </Contenedor>
    )

}

export default App;