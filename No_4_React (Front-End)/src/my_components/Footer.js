import React from 'react'
// import './footer.css'

export const Footer = () => {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  let footerStyle = {
    position: "relatives",
    top: "100vh",
    width: "100%",
    border: "1px solid navy"
  }
  return (
    <>
    <div>
        <button onClick={function() {console.log('Anonymous Function has gotten a Vote!')}}>
        Anonymous function
        </button>
        <button onClick={() => console.log('Arrow Function has gotten a Vote!')}>
        Arrow Function
        </button>
    </div>
    <div>
      <h1> Guess the Correct Number </h1>
      <button onClick={handleClick}> Guess the number between 1 and 3</button>
    </div>
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'> Copyright &copy; MyTodoList.com </p>
    </footer>
    </>
  )
}
