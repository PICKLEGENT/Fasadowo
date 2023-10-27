import PropTypes from 'prop-types';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

function Banner(props) {
    return (
        <section className='banner-wrapper'>
            <div className='banner'>
                <div
                    className='banner-image'
                    style={{
                        backgroundImage: `url(${
                            props.slides ? props.slides[props.currSlide] : null
                        })`,
                    }}
                ></div>
                <div className='left-arrow'>
                    <FiArrowLeftCircle size={30} onClick={props.prevSlide} />
                </div>
                <div className='right-arrow'>
                    <FiArrowRightCircle size={30} onClick={props.nextSlide} />
                </div>
            </div>
        </section>
    );
}

Banner.propTypes = {
    slides: PropTypes.array,
    currSlide: PropTypes.number,
    prevSlide: PropTypes.func,
    nextSlide: PropTypes.func,
    parentWidth: PropTypes.number,
};

export default Banner;
