import React from 'react';
import BannerImage from '../../images/banner.jpg'
import SaleImg1 from '../../images/offers/1.png'
import SaleImg2 from '../../images/offers/2.png'
import SaleImg3 from '../../images/offers/3.png'
import SaleImg4 from '../../images/offers/4.png'
import SaleImg5 from '../../images/offers/5.png'
import SaleImg6 from '../../images/offers/6.png'
import SaleImg7 from '../../images/offers/7.png'
import SaleImg8 from '../../images/offers/8.png'
import SaleImg9 from '../../images/offers/9.png'
import SaleImg10 from '../../images/offers/10.png'
import SaleImg11 from '../../images/offers/11.png'
import SaleImg12 from '../../images/offers/12.png'

import OffSale1 from '../../images/categories/1.jpg'
import OffSale2 from '../../images/categories/2.jpg'
import OffSale3 from '../../images/categories/3.jpg'
import OffSale4 from '../../images/categories/4.jpg'
import OffSale5 from '../../images/categories/5.jpg'
import OffSale6 from '../../images/categories/6.jpg'
import OffSale7 from '../../images/categories/7.jpg'
import OffSale8 from '../../images/categories/8.jpg'
import OffSale9 from '../../images/categories/9.jpg'
import OffSale10 from '../../images/categories/10.jpg'



import './Main.css';

const Main = () => {
  return (
    <div>

     <div className='banner_container'>
     <img className='banner_image' src={BannerImage} alt='Main Banner' />
     </div>
     <div className='category_headling'>MEDAL WORTHY BRANDS TO BAG</div>
     <div className='category_item'>
      <a href='#'><img className='sale_item' src={SaleImg1}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg2}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg3}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg4}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg5}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg6}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg7}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg8}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg9}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg10}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg11}></img></a>
      <a href='#'><img className='sale_item' src={SaleImg12}></img></a>

     </div>

     <div className='category_headling'>SHOP NY CATEGORY</div>
     <div className='category_item'>
      <a href='#'><img className='sale_item' src={OffSale1}></img></a>
      <a href='#'><img className='sale_item' src={OffSale2}></img></a>
      <a href='#'><img className='sale_item' src={OffSale3}></img></a>
      <a href='#'><img className='sale_item' src={OffSale4}></img></a>
      <a href='#'><img className='sale_item' src={OffSale5}></img></a>
      <a href='#'><img className='sale_item' src={OffSale6}></img></a>
      <a href='#'><img className='sale_item' src={OffSale7}></img></a>
      <a href='#'><img className='sale_item' src={OffSale8}></img></a>
      <a href='#'><img className='sale_item' src={OffSale9}></img></a>
      <a href='#'><img className='sale_item' src={OffSale10}></img></a>
  
     </div>

    </div>
  );
}


export default Main;
