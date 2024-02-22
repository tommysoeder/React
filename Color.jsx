const Color = ({color}) => {
  return (
    <ul>
        {color.map((e)=>(
            <li>{e.name}</li>
        ))}
    </ul>
  )
}

export default Color