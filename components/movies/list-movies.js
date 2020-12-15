import Link from 'next/link'
import slugify from 'react-slugify'
import { Row, Col, Card, Skeleton } from 'antd'
import * as reselect from '../../redux/movies/reselect'
import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'


const { Meta } = Card

export default function ListMovies() {
  const {loading, movies} = useSelector(createStructuredSelector({
    loading: reselect.loadingSearch,
    movies: reselect.getDataMovies
  }))

  if(loading){
    return (<Skeleton/>)
  }

  return (
    <>
      <Row style={{ marginTop: '20px' }}>
        <Col span={20} offset={2}>
          <Row>
          {movies ? movies.map((item, index) => (
            <Col span={6} key={index}>
              <Link href={`watch/${slugify(item.title)}/${item.id}`}>
                <a>
                  <Card
                    hoverable
                    style={{ width: 240, marginTop: '20px' }}
                    cover={<img alt="example" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                  >
                    <Meta title={item.title} />
                  </Card>
                </a>
              </Link>
            </Col>
          )) : null }
            
          </Row>
        </Col>
      </Row>
    </>
  )
}
