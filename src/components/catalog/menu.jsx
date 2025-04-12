



function MenuCatalog() {
    return (
        <div className="menu">
            <div className="menu__wrapper">
                <div className="menu__container">
                    <div className="menu__category --active">
                        <div className="menu__category-block-img">
                            <img
                                className="menu__category-img"
                                src="./img/catalog/cofe.png"
                                alt="alt"
                            />
                        </div>
                        <div className="menu__category-name">
                            <span>Кофе</span>
                        </div>
                        <span className="vector-choice"></span>
                    </div>
                    <div className="menu__category">
                        <div className="menu__category-block-img">
                            <img
                                className="menu__category-img"
                                src="./img/catalog/tea.png"
                                alt="alt"
                            />
                        </div>
                        <div className="menu__category-name">
                            <span>Чай</span>
                        </div>
                        <span className="vector-choice"></span>
                    </div>
                    <div className="menu__category">
                        <div className="menu__category-block-img">
                            <img
                                className="menu__category-img"
                                src="./img/catalog/milk.png"
                                alt="alt"
                            />
                        </div>
                        <div className="menu__category-name">
                            <span>Молочный коктейль</span>
                        </div>
                        <span className="vector-choice"></span>
                    </div>
                    <div className="menu__category">
                        <div className="menu__category-block-img">
                            <img
                                className="menu__category-img"
                                src="./img/catalog/drinks.png"
                                alt="alt"
                            />
                        </div>
                        <div className="menu__category-name">
                            <span>
                                Морсы <br />и газ. напитки
                            </span>
                        </div>
                        <span className="vector-choice"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCatalog;
