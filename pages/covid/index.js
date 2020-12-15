import { Row, Col, Skeleton } from 'antd'

export default function AppCovid({ result }) {
  if(!result.hasOwnProperty('Global')){
    return (<Skeleton active />)
  }

  return(
    <>
      <Row>
        <Col span={12} offset={6}>
          <h1> Thong tin virus corona</h1>
          <Row>
            <Col span={8}>
              <p> So ca moi nhiem: {result.Global.NewConfirmed.toLocaleString()}</p>
              <p>Tong so ca bi nhiem:  {result.Global.TotalConfirmed.toLocaleString()}</p>
            </Col>
            <Col span={8}>
              <p> So ca moi chet: </p>
              <p>Tong so ca chet:  </p>
            </Col>
            <Col span={8}>
              <p> So ca moi khoi: </p>
              <p>Tong so khoi benh:  </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export async function getStaticProps() {
  // call api
  const response = await fetch(`https://api.covid19api.com/summary`)
  const result = await response.json()
  return {
    props: {
      result,
    }
  }
}