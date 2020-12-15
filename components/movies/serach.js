import { Row, Col, Input } from 'antd'
import { searchMovies } from '../../redux/movies/actions'
import { useDispatch } from 'react-redux'

const { Search } = Input

export default function SearchMovies() {
  const dispatch = useDispatch()
  const searchFilm = (name) => {
    dispatch(searchMovies(name))
  }

  return (
    <>
      <Row style={{ margin: '10px 0px' }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="name movies ..."
            onSearch={val => searchFilm(val)}
            enterButton
          />
        </Col>
      </Row>
    </>
  )
}