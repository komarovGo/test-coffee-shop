function ProductCatalog() {
    return (
        <div className="product">
            <div className="product__wrapper">
                <div className="product__container">
                    <div className="product__block-title">
                        <h1 className="product__title">Кофе</h1>
                        <span className="vector-title-circle"></span>
                    </div>
                    <div className="product__result">
                        <a href="#" className="product__item">
                            <div className="product__item-img-block">
                                <img
                                    src="./img/catalog/product1.png"
                                    alt="alt"
                                />
                            </div>
                            <div className="product__item-text">
                                <div className="product__item-name">
                                    <span>Эспрессо</span>
                                </div>
                                <div className="product__item-price">
                                    от
                                    <span className="product__item-price-value">
                                        79
                                    </span>
                                    <span className="product__item-ru">₽</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="product__item">
                            <div className="product__item-img-block">
                                <img
                                    src="./img/catalog/product2.png"
                                    alt="alt"
                                />
                            </div>
                            <div className="product__item-text">
                                <div className="product__item-name">
                                    <span>Эспрессо</span>
                                </div>
                                <div className="product__item-price">
                                    от
                                    <span className="product__item-price-value">
                                        109
                                    </span>
                                    <span className="product__item-ru">₽</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="product__item">
                            <div className="product__item-img-block">
                                <img
                                    src="./img/catalog/product3.png"
                                    alt="alt"
                                />
                            </div>
                            <div className="product__item-text">
                                <div className="product__item-name">
                                    <span>Американо</span>
                                </div>
                                <div className="product__item-price">
                                    от
                                    <span className="product__item-price-value">
                                        119
                                    </span>
                                    <span className="product__item-ru">₽</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="product__item">
                            <div className="product__item-img-block">
                                <img
                                    src="./img/catalog/product4.png"
                                    alt="alt"
                                />
                            </div>
                            <div className="product__item-text">
                                <div className="product__item-name">
                                    <span>Латте</span>
                                </div>
                                <div className="product__item-price">
                                    от
                                    <span className="product__item-price-value">
                                        129
                                    </span>
                                    <span className="product__item-ru">₽</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="product__item">
                            <div className="product__item-img-block">
                                <img
                                    src="./img/catalog/product5.png"
                                    alt="alt"
                                />
                            </div>
                            <div className="product__item-text">
                                <div className="product__item-name">
                                    <span>Капучино</span>
                                </div>
                                <div className="product__item-price">
                                    от
                                    <span className="product__item-price-value">
                                        129
                                    </span>
                                    <span className="product__item-ru">₽</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="product__item">
                            <div className="product__item-img-block">
                                <img
                                    src="./img/catalog/product6.png"
                                    alt="alt"
                                />
                            </div>
                            <div className="product__item-text">
                                <div className="product__item-name">
                                    <span>Макиато</span>
                                </div>
                                <div className="product__item-price">
                                    от
                                    <span className="product__item-price-value">
                                        129
                                    </span>
                                    <span className="product__item-ru">₽</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
