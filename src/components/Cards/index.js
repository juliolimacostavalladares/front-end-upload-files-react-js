import React, { useState, useEffect } from 'react';

import { formatDistance } from 'date-fns'

import { ptBR } from 'date-fns/locale'

import axios from '../../services/api';
// import { Container } from './styles';

export default function Cards() {

  const [url, setUrl] = useState([])

   
  useEffect(( ) => {
    axios.get('list-url').then((response)=>{
      const res = response.data
      setUrl(res.reverse())
    });
  }, [])

  url.map( i =>{

  })

  return (
    <div className="container" style={{marginTop: '20px'}}>
      
    <div className="row mb-2">
    <div className="col-md-6">
    { url.map( i => {
      
      return(
        <div key={i.id} className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Lar</strong>
          <h3 className="mb-0">Novo</h3>
          {
              formatDistance(
                new Date(i.createdAt),
                new Date(),
                {locale: ptBR} // Pass the locale as an option
              )
          }
          <embed  width={100}  height={100} id={'collapseExample'+i.id} className="card-text mb-auto collapse" src={i.url} alt="s"/>
          <a className="stretched-link" data-toggle="collapse" href={'#collapseExample'+i.id} aria-expanded="false" aria-controls={"collapseExample"+i.id}>Continue Lendo</a>
         </div>
    </div>
      )
      
    }) }
      
    </div>
    </div>   
    </div>
  
  );
}