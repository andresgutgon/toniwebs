type Props = { numOfItems: number }
const useArrayFromNumber = ({ numOfItems }: Props): number[] => [
  ...Array.from(Array(numOfItems).keys())
]

export default useArrayFromNumber
