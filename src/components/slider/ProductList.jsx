import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import velik11 from '../../fotoSlider/1foto/Ace_Two_Matte_Black_NEW.webp';
import velik12 from '../../fotoSlider/1foto/Ace_Two_-_Graphite_-_NEW.webp';
import velik13 from '../../fotoSlider/1foto/Ace_Two_-_Dune_-_NEW.webp';
import velik14 from '../../fotoSlider/1foto/Ace_Two_-_Jet_Black_-_NEW.webp';
import black1 from '../../fotoSlider/1foto/Black.png';
import gray1 from '../../fotoSlider/1foto/Gray.png';
import sand1 from '../../fotoSlider/1foto/Sand.png';
import sandBlack1 from '../../fotoSlider/1foto/sandBlack.png';


import velik21 from '../../fotoSlider/2foto/Ivy_Two_Matte_Black_NEW.png';
import velik24 from '../../fotoSlider/2foto/Ivy_Two_-_Pebble_Grey_-_NEW.png';
import velik23 from '../../fotoSlider/2foto/Ivy_Two_-_Dune_-_NEW.png';
import velik22 from '../../fotoSlider/2foto/Ivy_Two_-_Graphite_-_NEW.png';
import black2 from '../../fotoSlider/2foto/Black.png';
import gray2 from '../../fotoSlider/2foto/Gray.png';
import sand2 from '../../fotoSlider/2foto/Sand.png';
import sandWhite2 from '../../fotoSlider/2foto/SandWhite.png';






// Компонент ProductList отображает список продуктов
const ProductList = () => {
    const products = [
        {
            title: 'Electric Ace',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [velik11, velik12, velik13, velik14],
            colorImages: [black1, gray1, sand1, sandBlack1]
        },
        {
            title: 'Electric Ivy',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [velik21, velik22, velik23, velik24],
            colorImages: [black2, gray2, sand2, sandWhite2]
        }
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    images={product.images}
                    colorImages={product.colorImages}
                />
            ))}
        </div>
    );
};

export default ProductList;
