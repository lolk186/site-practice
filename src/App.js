import { useState } from 'react';
import Counter from "./components/componentsHome/Counter";
import Border from './components/componentsHome/Border';
import HeaderComponentHome from './components/componentsHome/HeaderComponent';
import Block2ComponentHome from './components/componentsHome/Block2Component';
import Block3ComponentHome from './components/componentsHome/Block3Component';
import Block4ComponentHome from './components/componentsHome/Block4Component';
import Block5ComponentHome from './components/componentsHome/Block5Component';
import Block6ComponentHome from './components/componentsHome/Block6Component';
// import Block7ComponentHome from './components/componentsHome/Block7Component';
import Block8ComponentHome from './components/componentsHome/Block8Component';
// import Block9ComponentHome from './components/componentsHome/Block9Component';
import Block10ComponentHome from './components/componentsHome/Block10Component';
import Block11ComponentHome from './components/componentsHome/Block11Component';

import HeaderComponentProducts from './components/componentsProducts/HeaderComponent';
import Block2ComponentProducts from './components/componentsProducts/Block2Component';
import Block3ComponentProducts from './components/componentsProducts/Block3Component';
import Block4ComponentProducts from './components/componentsProducts/Block4Component';
import Block5ComponentProducts from './components/componentsProducts/Block5Component';
import Block6ComponentProducts from './components/componentsProducts/Block6Component';
import Block7ComponentProducts from './components/componentsProducts/Block7Component';
import Block8ComponentProducts from './components/componentsProducts/Block8Component';
import Block9ComponentProducts from './components/componentsProducts/Block9Component';
import Block10ComponentProducts from './components/componentsProducts/Block10Component';
import Block11ComponentProducts from './components/componentsProducts/Block11Component';
import Block12ComponentProducts from './components/componentsProducts/Block12Component';

import Block1ComponentSingleProductPage from './components/componentsSingleProductPage/Block1Component';
import Block2ComponentSingleProductPage from './components/componentsSingleProductPage/Block2Component';
import Block3ComponentSingleProductPage from './components/componentsSingleProductPage/Block3Component';
import Block4ComponentSingleProductPage from './components/componentsSingleProductPage/Block4Component';
import Block5ComponentSingleProductPage from './components/componentsSingleProductPage/Block5Component';
import Block6ComponentSingleProductPage from './components/componentsSingleProductPage/Block6Component';
import Block7ComponentSingleProductPage from './components/componentsSingleProductPage/Block7Component';
import Block8ComponentSingleProductPage from './components/componentsSingleProductPage/Block8Component';
import Block9ComponentSingleProductPage from './components/componentsSingleProductPage/Block9Component';
import Block10ComponentSingleProductPage from './components/componentsSingleProductPage/Block10Component';
import Block11ComponentSingleProductPage from './components/componentsSingleProductPage/Block11Component';
import Block12ComponentSingleProductPage from './components/componentsSingleProductPage/Block12Component';
import Block13ComponentSingleProductPage from './components/componentsSingleProductPage/Block13Component';
import Block14ComponentSingleProductPage from './components/componentsSingleProductPage/Block14Component';
import Block15ComponentSingleProductPage from './components/componentsSingleProductPage/Block15Component';
import Block16ComponentSingleProductPage from './components/componentsSingleProductPage/Block16Component';

import Block1ComponentCities from './components/componentsCities/Block1Component';
import Block2ComponentCities from './components/componentsCities/Block2Component';
import Block3ComponentCities from './components/componentsCities/Block3Component';
import Block4ComponentCities from './components/componentsCities/Block4Component';
import Block5ComponentCities from './components/componentsCities/Block5Component';
import Block6ComponentCities from './components/componentsCities/Block6Component';
import Block7ComponentCities from './components/componentsCities/Block7Component';

import Block1ComponentAboutUs from './components/componentsAboutUs/Block1Component';
import Block2ComponentAboutUs from './components/componentsAboutUs/Block2Component';
import Block3ComponentAboutUs from './components/componentsAboutUs/Block3Component';
import Block4ComponentAboutUs from './components/componentsAboutUs/Block4Component';
import Block5ComponentAboutUs from './components/componentsAboutUs/Block5Component';
import Block6ComponentAboutUs from './components/componentsAboutUs/Block6Component';
import Block7ComponentAboutUs from './components/componentsAboutUs/Block7Component';
import Block8ComponentAboutUs from './components/componentsAboutUs/Block8Component';
import Block9ComponentAboutUs from './components/componentsAboutUs/Block9Component';

import AccordionContainer from './components/accordion/AccordionContainer';
import ProductList from './components/slider/ProductList';




function App() {

  const [value, setValue] =useState('TEXT')

  return (
    <>
    <HeaderComponentHome/>
    <Block2ComponentHome/>
    <Block3ComponentHome/>
    <Block4ComponentHome/>
    <Block5ComponentHome/>
    <Block6ComponentHome/>
    {/* <Block7ComponentHome/> */}
    <ProductList/>
    <Block8ComponentHome/>
    {/* <Block9ComponentHome/> */}
    <AccordionContainer/>
    <Block10ComponentHome/>
    <Block11ComponentHome/>

    {/* <HeaderComponentProducts/>
    <Block2ComponentProducts/>
    <Block3ComponentProducts/>
    <Block4ComponentProducts/>
    <Block5ComponentProducts/>
    <Block6ComponentProducts/>
    <Block7ComponentProducts/>
    <Block8ComponentProducts/>
    <Block9ComponentProducts/>
    <Block10ComponentProducts/>
    <Block11ComponentProducts/>
    <Block12ComponentProducts/> */}

    {/* <Block1ComponentSingleProductPage/>
    <Block2ComponentSingleProductPage/>
    <Block3ComponentSingleProductPage/>
    <Block4ComponentSingleProductPage/>
    <Block5ComponentSingleProductPage/>
    <Block6ComponentSingleProductPage/>
    <Block7ComponentSingleProductPage/>
    <Block8ComponentSingleProductPage/>
    <Block9ComponentSingleProductPage/>
    <Block10ComponentSingleProductPage/>
    <Block11ComponentSingleProductPage/>
    <Block12ComponentSingleProductPage/>
    <Block13ComponentSingleProductPage/>
    <Block14ComponentSingleProductPage/>
    <Block15ComponentSingleProductPage/>
    <Block16ComponentSingleProductPage/> */}
    
     {/* <Block1ComponentCities/>
    <Block2ComponentCities/>
    <Block3ComponentCities/>
    <Block4ComponentCities/>
    <Block5ComponentCities/>
    <Block6ComponentCities/>
    <Block7ComponentCities/>  */}

    {/* <Block1ComponentAboutUs/>
    <Block2ComponentAboutUs/>
    <Block3ComponentAboutUs/>
    <Block4ComponentAboutUs/>
    <Block5ComponentAboutUs/>
    <Block6ComponentAboutUs/>
    <Block7ComponentAboutUs/>
    <Block8ComponentAboutUs/>
    <Block9ComponentAboutUs/> */}



    


    </>
  );
}

export default App;


