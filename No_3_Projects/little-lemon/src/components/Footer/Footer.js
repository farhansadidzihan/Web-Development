import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relatives",
    top: "100vh",
    width: "100%",
    border: "1px solid navy"
  }
  return (
    <div className='container-fluid mx-6'>
      <footer className="bg-dark text-light py-3" style={footerStyle}>
        <p className='text-left'> Copyright &copy; Little Lemon </p>
    </footer>
    </div>
  )
}

export default Footer
