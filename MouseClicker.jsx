function MouseClicker({name}) {
    function handleButtonClick(event){
        console.log(event.currentTarget.name)
    }
  return (
    <div>
        <button name={name} onClick={handleButtonClick}>Click Me!</button>
        {/* <button name="two" onClick={handleButtonClick}>Click Me!</button> */}
    </div>
  )
}

export default MouseClicker