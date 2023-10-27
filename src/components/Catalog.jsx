import { FiChevronsRight } from 'react-icons/fi';

function Catalog() {
    return (
        <section className='catalog-wrapper' name='catalog'>
            <div className='product product-left'>
                <div className='product-img'></div>
                <div className='product-text'>
                    <div className='product-name'>
                        <h2>Название</h2>
                    </div>
                    <div className='product-description'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum consequatur esse ad eveniet laudantium
                            harum, vel accusamus corrupti voluptatum officia
                            aperiam provident, mollitia iste itaque officiis
                            blanditiis? Laudantium, eos eveniet.
                        </p>
                    </div>
                    <div className='product-link'>
                        <a href='#'>
                            <span>Перейти</span>
                            <FiChevronsRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='product product-right'>
                <div className='product-text'>
                    <div className='product-name'>
                        <h2>Название</h2>
                    </div>
                    <div className='product-description'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum consequatur esse ad eveniet laudantium
                            harum, vel accusamus corrupti voluptatum officia
                            aperiam provident, mollitia iste itaque officiis
                            blanditiis? Laudantium, eos eveniet.
                        </p>
                    </div>
                    <div className='product-link'>
                        <a href='#'>
                            <span>Перейти</span>
                            <FiChevronsRight size={20} />
                        </a>
                    </div>
                </div>
                <div className='product-img'></div>
            </div>
            <div className='product product-left'>
                <div className='product-img'></div>
                <div className='product-text'>
                    <div className='product-name'>
                        <h2>Название</h2>
                    </div>
                    <div className='product-description'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum consequatur esse ad eveniet laudantium
                            harum, vel accusamus corrupti voluptatum officia
                            aperiam provident, mollitia iste itaque officiis
                            blanditiis? Laudantium, eos eveniet.
                        </p>
                    </div>
                    <div className='product-link'>
                        <a href='#'>
                            <span>Перейти</span>
                            <FiChevronsRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='product product-right'>
                <div className='product-text'>
                    <div className='product-name'>
                        <h2>Название</h2>
                    </div>
                    <div className='product-description'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum consequatur esse ad eveniet laudantium
                            harum, vel accusamus corrupti voluptatum officia
                            aperiam provident, mollitia iste itaque officiis
                            blanditiis? Laudantium, eos eveniet.
                        </p>
                    </div>
                    <div className='product-link'>
                        <a href='#'>
                            <span>Перейти</span>
                            <FiChevronsRight size={20} />
                        </a>
                    </div>
                </div>
                <div className='product-img'></div>
            </div>
        </section>
    );
}

export default Catalog;
