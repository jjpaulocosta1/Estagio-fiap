import React, {useState} from "react";
import imglogo from '../img/logofiap.png';
import '../navbar.css';
import mundo from '../img/header.png'
import InscrevaButton from "./efeitobotao";


function Navbar(){
    const [active, setActive] = useState('nav__menu');
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggler') : setToggleIcon('nav__toggler');
    }
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    return(
        <div>
            <nav className="nav">
                <a href='#' className="nav__brand">
                    <img className='nav__brand-logo' src={imglogo} alt='Logo escrito FIAP'></img>
                </a>
                <ul className={active}>
                    <li className="nav__item-curso"><a href="#curso" className="nav__link"></a>O curso</li>
                    <li className="nav__item-matriz"><a href="#" className="nav__link"></a>Matriz Curricular</li>
                    <li className="nav__item-turmas"><a href="#" className="nav__link"></a>Turmas</li>
                </ul>
                <button className="nav__button">Inscreva-se</button>
                <div onClick = {navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <div className="image-container">
                <img src={mundo} alt='logo do mundo'></img>
                <p className="image-text">sistemas para internet</p>
                <p className="image-text-2">full stack, e-commerce & digital transformation</p>
                <InscrevaButton/>
                <div class="text-container">
                    <div class="text-container-left">
                        <h2 id='curso'class="text-title">O curso</h2>
                        <p class="text-description">Estamos na era da indústria 4.0. Tudo é digital, nossas experiências, compras e como consumimos informação. O profissional de sistemas web nunca foi tão requisitado quanto agora, pare para pensar quantos apps você acessou hoje, quantas compras online fez no último mês e quantos sites e redes sociais você entrou hoje mesmo. Vivemos a era do comércio eletrônico e da transformação digital. Gigantes como Amazon e outros marketplaces crescem a cada dia mais. Neste cenário, o mercado se expande e as vagas para desenvolvimento web, desenvolvimento de e-commerce, marketplaces acompanham esse crescimento. É um novo mundo onde o mindset é ser digital. </p>
                    </div>
                    <hr class="text-divider"/>
                    <div class="text-container-right">
                        <h3 class="text-title-2">Você vai se preparar para:</h3>
                        <p class="text-description-1" style={{whiteSpace: 'pre-line'}}>- Desenvolvimento Front-end: HTML, CSS, Javascript, HTML 5, Angular, Gulp, Bootstrap, Ruby, React Sass, dentre linguagens, frameworks e bibliotecas.
                            E-Commerce & E-Bussiness: desenvolvimento de marketplaces, domínio na área de comércios eletrônicos, modelos de negócios para e-commerces, jornada do consumidor, divulgação de comércio eletrônico, como empreender na internet e boas práticas de desenvolvimento para e-commerce.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;