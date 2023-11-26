import { Navbar, Container, Nav} from "react-bootstrap";
import { useState, useEffect} from "react";
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return() => window.removeEventListener('scroll', onScroll)
    },[])

    const onUpdateActiveLink =(value) => {
            setActiveLink(value)
    }
    return(
        <Navbar expand = "lg" className={scrolled? "scrolled": ""} >
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light  bg-light " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#accueil" className={activeLink === 'accueil'? 'active navbar-link': 'navbar-link'}
             onClick={() => onUpdateActiveLink('accueil')}>ACCUEIL</Nav.Link>
            <Nav.Link href="#presentation" className={activeLink === 'presentation'? 'active navbar-link': 'navbar-link'}
             onClick={() => onUpdateActiveLink('presentation')}>PRESENTATION</Nav.Link>
            <Nav.Link href="#portfolio" className={activeLink === 'portfolio'? 'active navbar-link': 'navbar-link'}
             onClick={() => onUpdateActiveLink('portfolio')}>PORTFOLIO</Nav.Link>
            <Nav.Link href="#competences" className={activeLink === 'competences'? 'active navbar-link': 'navbar-link'}
             onClick={() => onUpdateActiveLink('competences')}>COMPETENCES</Nav.Link>
            <Nav.Link href="#experiences"className={activeLink === 'experiences'? 'active navbar-link': 'navbar-link'}
             onClick={() => onUpdateActiveLink('experiences')}>EXPERIENCES</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
