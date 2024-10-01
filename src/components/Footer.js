import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { BsTwitter, BsFacebook, BsWhatsapp, BsInstagram, BsYoutube, BsLinkedin, BsGoogle, BsArrowUpCircle } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
        <Container>
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Nav.Link href="https://iraqooh.github.io/irakuharry/aboutme.html" className="text-muted">About Me</Nav.Link></li>
            <li className="nav-item"><Nav.Link href="#" className="text-muted">About</Nav.Link></li>
          </ul>
          <div className="pb-2 mb-4">
            <a className="p-4 text-light" href="https://twitter.com/iraqooh"><BsTwitter /></a>
            <a className="p-4 text-light" href="https://facebook.com/iraqooh"><BsFacebook /></a>
            <a className="p-4 text-light" href="https://wa.me/256773792089"><BsWhatsapp /></a>
            <a className="p-4 text-light" href="https://instagram.com/iraqooh"><BsInstagram /></a>
            <a className="p-4 text-light" href="https://youtube.com/channel/UCbcroI_S7GE3-M-2PLt1huQ"><BsYoutube /></a>
            <a className="p-4 text-light" href="https://linkedin.com/in/iraqooh"><BsLinkedin /></a>
            <a className="p-4 text-light" href="mailto:iraqooh@gmail.com?subject=Enquiry"><BsGoogle /></a>
          </div>
          <p className="lead">Copyright &copy; 2024 Iraku Harry</p>
          <a href="#top" className="position-absolute bottom-0 end-0 p-2">
            <BsArrowUpCircle className="h1 text-light" />
          </a>
        </Container>
      </footer>
  )
}

export default Footer