import { Link } from 'react-scroll';

function Header() {
    return (
        <header>
            <div className='logo'>
                <Link
                    className='logo-link'
                    to='top'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={400}
                >
                    <span>f</span>
                    <span>fasadowo</span>
                </Link>
            </div>
            <nav className='nav-bar'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass='active'
                            to='top'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={400}
                        >
                            Главная
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass='active'
                            to='information'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={400}
                        >
                            О нас
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass='active'
                            to='questions'
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={400}
                        >
                            ЧЗВ
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass='active'
                            to='catalog'
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={400}
                        >
                            Каталог
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass='active'
                            to='contacts'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={400}
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
