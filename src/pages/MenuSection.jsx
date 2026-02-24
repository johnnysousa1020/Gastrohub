import "./MenuSection.css"
import MenuCard from "./MenuCard"

function MenuSection({ title, items, addToCart }){
    return(
        <section className="menu-section" id={title.toLowerCase()}>
            <h2 className="menu-title">{title}</h2>

            <div className="menu-grid">
                {items.map(item => (
                    <MenuCard 
                    key={item.id} 
                    item={item}
                    addToCart={addToCart}/>
                ))}
            </div>
        </section>
    )
}

export default MenuSection;