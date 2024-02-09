function MouseClicker({name}) {
    function handleButtonClick(event){
        const imageSrc = event.currentTarget.querySelector("img").src;
        console.log(imageSrc);
    }
  return (
    <div>
        <button name={name} onClick={handleButtonClick}><img src="https://i.pinimg.com/736x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg" width="50"></img>Click Me!</button>
        {/* <button name="two" onClick={handleButtonClick}>Click Me!</button> */}
    </div>
  )
}

export default MouseClicker