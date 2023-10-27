function Contact() {
    return (
        <section className='contact-wrapper' name='contacts'>
            <div className='contact-heading'>
                <h2>Контакты</h2>
            </div>
            <div className='contact-map'></div>
            <div className='contact-info'>
                <div className='contact-info-item'>
                    <div className='contact-item-heading'>
                        <p>Часы работы:</p>
                    </div>
                    <div className='contact-item-description'>
                        <p>9:00 — 18:00</p>
                    </div>
                </div>
                <div className='contact-info-item'>
                    <div className='contact-item-heading'>
                        <p>Адрес:</p>
                    </div>
                    <div className='contact-item-description'>
                        <p>Ул. Пушкина, д. Колотушкина</p>
                    </div>
                </div>
                <div className='contact-info-item'>
                    <div className='contact-item-heading'>
                        <p>Телефон:</p>
                    </div>
                    <div className='contact-item-description'>
                        <p>+7 989 245 23 55</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
