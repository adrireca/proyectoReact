import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Footer = () => {

/* */
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

  return (
    <React.Fragment>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Aviso legal</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Política de privacidad</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Política de cookies</a></li>
          </ul>
          <p className="text-center text-muted">&copy; 2023 Designed and developed by Adrián Moya - Adrián Reyes</p>
          {/*  */}
          <div className='divArrow' onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
          </div>
        </footer>
      </div>
    </React.Fragment>
  )
}
