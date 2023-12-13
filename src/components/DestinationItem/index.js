// Write your code here
const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <li>
      <img src={imgUrl} alt={name} className="img" />
      <p className="paragraph">{name}</p>
    </li>
  )
}
export default DestinationItem
