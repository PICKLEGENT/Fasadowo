import { IoMdMail, IoLogoWhatsapp } from 'react-icons/io';
import { BiLogoTelegram } from 'react-icons/bi';

function Footer() {
    return (
        <footer>
            <div className='company'>ООО &#34;Комплект Дизайн&#34;</div>
            <div className='socials'>
                <a href='#' className='footer-link'>
                    <IoMdMail size={22} />
                </a>
                <a href='#' className='footer-link'>
                    <IoLogoWhatsapp size={22} />
                </a>
                <a href='#' className='footer-link'>
                    <BiLogoTelegram size={22} />
                </a>
            </div>
            <div className='author'>Created by LeFort Designs</div>
        </footer>
    );
}

export default Footer;
