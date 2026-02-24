import { useState } from "react"
import Banner from "../components/Banner"
import { menuItens } from "../data/menu"
import MenuSection from "./MenuSection"
import PromoBanner from "../components/PromoBanner"
import "./Home.css"

function Home({ addToCart }){
    const [search, setSearch] = useState("")

    const filteredltems = menuItens.filter(item => 
        item.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

    const popularltems = menuItens.filter(item =>
        item.popular
    )

    return(
        <>
        <Banner />

        <div className="search-container" id="cardapio">
            <input 
            type="text"
            placeholder="Buscar prato.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input" />
        </div>

        {search && (
            <h2 className="search-title">
                Resultados para "{search}"
            </h2>
        )}

        {!search && popularltems.length > 0 && (
            <section className="popular-section">
                <h2 className="popular-title">🔥 Mais Pedidos</h2>

                <div className="popular-grid">
                    {popularltems.map(item => (
                        <div className="popular-card" key={item.id}>
                            <span className="badge">🔥 Popular</span>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>R$ {item.price.toFixed(2)}</p>
                            <button onClick={() => addToCart(item)}>
                                Adicionar
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        )}

        {!search && <PromoBanner />}
        
        {filteredltems.some(item => item.category === "entradas")
        && (
        <MenuSection 
        title="Entradas"
        items={filteredltems.filter(item => item.category === "entradas")}
        addToCart={addToCart}
        />
        )}

        {filteredltems.some(item => item.category === "principais")
        && (
        <MenuSection 
        title="Pratos Principais"
        items={filteredltems.filter(item => item.category === "principais")}
        addToCart={addToCart}
        />
        )}

        {filteredltems.some(item => item.category === "massas")
        && (
         <MenuSection 
        title="Massas"
        items={filteredltems.filter(item => item.category === "massas")}
        addToCart={addToCart}
        />
        )}

        {filteredltems.some(item => item.category === "sobremesas")
        && (
        <MenuSection 
        title="Sobremesas"
        items={filteredltems.filter(item => item.category === "sobremesas")}
        addToCart={addToCart}
        />
        )}

        {filteredltems.some(item => item.category === "bebidas")
        && (
        <MenuSection 
        title="Bebidas"
        items={filteredltems.filter(item => item.category === "bebidas")}
        addToCart={addToCart}
        />
        )}

        {filteredltems.length === 0 && (
            <p className="no-results">
                Nenhum prato encontrado
            </p>
        )}
        </>
    )
}

export default Home;