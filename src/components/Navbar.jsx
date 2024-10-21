import React from 'react'

const Navbar = () => {
  return (
    <header className='position-fixed top-0 d-flex justify-content-start align-items-center bg-dark text-light w-100' style={{height:"8svh"}}>
        <h1 className='ms-3 '>Bharani'</h1>
        <nav className='nav d-flex'>
            <ul className='d-flex ' style={{marginLeft:'30rem',gap:'8rem',marginTop:'10px'}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </nav>
        <div className='d-flex border rounded-circle justify-content-center align-items-end bg-light text-dark' style={{width:'30px',marginLeft:'8rem'}}>B</div>
        
    </header>
  )
}

export default Navbar