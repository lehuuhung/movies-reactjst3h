import { useSelector } from 'react-redux'

export default function ResultComponent() {
  const result = useSelector(state => state.counter.count)
  return(
    <h1> {result}</h1>
  )
}