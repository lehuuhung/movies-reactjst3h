export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const incrementNumber = (val) => ({
  type: INCREMENT,
  val
})

export const decrementNumber = (val) => ({
  type: DECREMENT,
  val
})