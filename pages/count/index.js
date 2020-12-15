import ButtonComponent from '../../components/counter/button'
import ResultComponent from '../../components/counter/result'

export default function AppCounter(){
  return (
    <>
      <ButtonComponent name="increment"> + </ButtonComponent>
      <ButtonComponent name="decrement"> - </ButtonComponent>
      <ResultComponent/>
    </>
  )
}