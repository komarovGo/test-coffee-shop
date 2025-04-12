import HeaderCatalog from "./header";
import MenuCatalog from "./menu";
import ProductCatalog from "./product";


function MainCatalog() {
    return (
        <div className="catalog">
            <div className="catalog__wrapper">
                <div className="catalog__container wrap">
                    <HeaderCatalog/>
                    <MenuCatalog/>
                    <ProductCatalog/>
                </div>
            </div>
        </div>
    );
}

export default MainCatalog;
