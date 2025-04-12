

function MainScreen({ onClick }) {
    return (
        <div className="main-screen" onClick={onClick}>
            <div className="wrapper">
                <div className="main-screen__content wrap">
                    <div className="main-screen__block-title">
                        <h1 className="main-screen__title">
                            <span className="main-screen__span-text main-screen__span-1">
                                ЭТО
                            </span>
                            <span className="main-screen__span-text main-screen__span-2">
                                ТВОЙ
                            </span>
                            <span className="main-screen__span-text main-screen__span-3">
                                КОФЕ
                            </span>
                        </h1>
                    </div>
                    <div className="main-screen__block-main-img">
                        <img
                            src="./img/main-page/main-img.png"
                            alt="Описание изображения"
                            loading="lazy"
                        />
                    </div>
                    <div className="main-screen__bottom-text">
                        <h3 className="main-screen__text">
                            Коснитесь экрана, чтобы начать
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
