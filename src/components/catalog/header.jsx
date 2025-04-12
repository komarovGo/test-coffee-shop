function HeaderCatalog() {
    return (
        <div className="header">
            <div className="header__block-title">
                <h2 className="header__title">Выбор напитка</h2>
            </div>
            <div className="header__login-block">
                <button className="header__login-btn-swap">
                    <span className="header__login-btn-svg"></span>
                </button>
                <span className="header__login-text">Вход / регистрация</span>
            </div>
            <span className="vector-svg"></span>
        </div>
    );
}

export default HeaderCatalog;
