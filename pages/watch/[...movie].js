import { useRouter } from 'next/router'
import axios from 'axios'
import {Row, Col, Image} from 'antd';
import * as api from '../../redux/api/movies'

export default function DetailMovie({movie}) {
  //const router = useRouter()
  //const { id } = router.query
  console.log(movie);
  
  return (
    <>
         <Col style={{padding:'10px'}} span={6}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p style={{textAlign:'center'}}>{movie.original_title}</p>
      </Col>
      <Col span={12}>
        <h1>
          {movie.title}
        </h1>
        <p>
          {movie.overview}
        </p>
      </Col>
      <Col span={6}>
        
        <Row>
          {movie.images.backdrops.map((item,index)=>(
             <Col span={24} key={index}>
               <Image
                 src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
                 alt={item.vote_count}
               />
             </Col>
          ))}
         
        </Row>
      </Col>
    </>
  )
}



export async function getServerSideProps({ query }) {
    console.log(query);
//   const id = await query.id;
//   const result = await getDataMoviesById(id)
const params = query.movie || []
const id = params[1]
const result = await api.getDataMoviesById(id)
  return {
    props: {
      movie: result,
    },
  }
}