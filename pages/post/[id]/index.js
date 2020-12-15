import { useRouter } from 'next/router'
import { Button } from 'antd'

export default function DetailPost() {
  const router = useRouter()
  //console.log(router)
  const { id, age } = router.query
  // http://localhost:3000/post/1?age=10
  return(
    <>
      <h1>Chi tiet bai viet co id la : {id} - age: {age} </h1>
      <Button type="primary"> Antd </Button>
    </>
  )
}