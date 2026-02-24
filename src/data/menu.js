import brusche from "../assets/bruschetta.jpg"
import carpa from "../assets/carpaccio.jpg"
import camaroes from "../assets/camaroes.jpg"
import file from "../assets/file.jpg"
import salmao from "../assets/salmao.jpg"
import frango from "../assets/frango.jpg"
import risoto from "../assets/risoto.jpg"
import alfredo from "../assets/alfredo.jpg"
import lasanha from "../assets/lasanha.jpg"
import chee from "../assets/chee.jpg"
import petit from "../assets/petit.jpg"
import pudim from "../assets/pudim.jpg"
import refri from "../assets/suco.jpg"
import vinho from "../assets/vinho.jpg"
import suco from "../assets/refri.jpg"

export const menuItens = [
    {
        id: 1,
        name: "Bruschetta Gourmet",
        description: "Pão artesanal com tomate confit, manjericão fresco e azeite extravirgem.",
        price: 24.90,
        category: "entradas",
        image: brusche
    },
    {
        id: 2,
        name: "Carpaccio de Carne",
        description: "Finas fatias de carnes bovina com parmesão e molho cítrico.",
        price: 39.90,
        category: "entradas",
        image: carpa
    },
    {
        id: 3,
        name: "Camarões de Carne",
        description: "Camarões empanados servidos com molho especial da casa.",
        price: 44.90,
        category: "entradas",
        popular: true,
        image: camaroes
    },
    {
        id: 4,
        name: "Filé Mignon ao Molho Madeira",
        description: "Filé mignon grelhado com molho madeira e acompanhamentos.",
        price: 79.90,
        popular: true,
        category: "principais",
        image: file
    },
    {
        id: 5,
        name: "Salmão Grelhado",
        description: "Salmão ao ponto com legumes salteados e molho de ervas.",
        price: 84.90,
        category: "principais",
        image: salmao
    },
    {
        id: 6,
        name: "Frango Supreme",
        description: "Peito de frango recheado com queijo e ervas finas.",
        price: 59.90,
        category: "principais",
        image: frango
    },
    {
        id: 7,
        name: "Risoto de Camarão",
        description: "Arroz arbório cremoso com camarões e parmesão.",
        popular: true,
        price: 69.90,
        category: "massas",
        image: risoto
    },
    {
        id: 8,
        name: "Fettuccine Alfredo",
        description: "Massa fresca com molho cremoso de parmesão.",
        price: 54.90,
        category: "massas",
        image: alfredo
    },
    {
        id: 9,
        name: "Lasanha Artesanal",
        description: "Camadas de massa, molho bolonhesa e queijo gratinado.",
        price: 62.90,
        category: "massas",
        image: lasanha
    },
    {
        id: 10,
        name: "Cheesecake de Frutas Vermelhas",
        description: "Base crocante com creme suave e calda artesanal.",
        price: 29.90,
        category: "sobremesas",
        image: chee
    },
    {
        id: 11,
        name: "Petit Gateau",
        description: "Bolo quente de chocolate com sorvete de baunilha.",
        price: 32.90,
        popular: true,
        category: "sobremesas",
        image: petit
    },
    {
        id: 12,
        name: "Pudim da Casa",
        description: "Receita tradicional com calda de caramelo.",
        price: 19.90,
        category: "sobremesas",
        image: pudim
    },
    {
        id: 13,
        name: "Suco Natural",
        description: "Laranja, limão ou abacaxi com hortelã.",
        price: 12.90,
        category: "bebidas",
        image: suco
    },
    {
        id: 14,
        name: "Refrigerante",
        description: "Lata 350ml (sabores variados).",
        price: 7.90,
        category: "bebidas",
        image: refri
    },
    {
        id: 15,
        name: "Vinho Tinto",
        description: "Taça de vinho selecionado da casa.",
        price: 22.90,
        category: "bebidas",
        image: vinho
    },
]