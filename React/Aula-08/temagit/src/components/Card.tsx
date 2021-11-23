import moment from 'moment';
import React, {useContext, useEffect} from 'react'
import { axiosPath } from '../api'
import { CardContext } from '../context/CardContext';
import styles from './Card.module.css'

interface ICard{
  login: string;
  avatar_url:string;
  html_url:string;
  repos_url:string;
  email:string | null;
  created_at:string;
  followers:number;
}

const Card = () => {
  const { setUsuario,usuario } = useContext(CardContext);
  useEffect(()=>{
    (async ()=>{
      await axiosPath.get<ICard>(`/lcintra`).then(response => setUsuario({
        login:response.data.login,
        avatar_url:response.data.avatar_url,
        html_url:response.data.html_url,
        repos_url:response.data.repos_url,
        email:response.data.email,
        created_at:response.data.created_at,
        followers:response.data.followers
      }))
    })()
  },[])
  console.log(usuario)
  return (
    <main className={styles.cardMain}>
      <div className={styles.contentDiv}>
        <img src={usuario.avatar_url}/>
        <h2>{usuario.login}</h2>
        <h4>Membro desde <span>{moment(usuario.created_at).format('DD/MM/YYYY - hh:mm:ss')}</span></h4>
        <h4>Email:<span>{usuario.email ? usuario.email : ' Não informado'}</span></h4>
        <div className={styles.buttonsDiv}>
          <a href={usuario.html_url} target="_blank">Perfil</a>
          <p className={styles.followersParagraph}>Seguidores: <span>{usuario.followers}</span></p>
          <a href={usuario.repos_url} target="_blank">Repositórios</a>
        </div>  
      </div>
    </main>
  )
}

export default Card