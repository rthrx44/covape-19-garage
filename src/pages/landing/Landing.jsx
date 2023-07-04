import React from 'react'
import './Landing.css';
import Navbar from '../../components/navbar/Navbar';
import Candy from '../../components/assets/Candy.jpg';
import Juice from '../../components/assets/Juice.jpg';
import Pastry from '../../components/assets/Pastry.jpg';
import Vape from '../../components/assets/Vape.jpg';


function Landing() {
  return (
    <>
      <Navbar/>
      <main>
        <section className='hero container section'>
          <h1 className='hero__title'>Discover the Ultimate <br></br>Vaping Experience.</h1>
        </section>
        <section className='about container section'>
          {/* slide 1 */}
          <div className='about__img-wrapper'>
            <img className='img' src={Vape} alt='Vape Devices' />
          </div>
          <div className='about__wrapper'>
            <h3 className='about__title'>Vape Devices</h3>
            <p className='about__description'>Get ready to experience an unrivaled selection of vape devices, from sleek pen-style devices to powerful box mods.</p>
          </div>
          
          {/* slide 2 */}
          <div className='about__img-wrapper'>
            <img className='img' src={Juice} alt='Vape Juice' />
          </div>
          <div className='about__wrapper'>
            <h3 className='about__title'>High-Quality E-Juices</h3>
            <p className='about__description'>Choose from a stunning range of premium vape juice flavors, expertly crafted to satisfy even the most discerning palate.</p>
          </div>
          
          {/* slide 3 */}
          <div className='about__img-wrapper'>
            <img className='img' src={Candy} alt='Candies' />
          </div>
          <div className='about__wrapper'>
            <h3 className='about__title'>Puffs of Paradise</h3>
            <p className='about__description'>Discover new and exotic flavors to elevate and satisfy your vaping experience.</p>
          </div>
          
          {/* slide 4 */}
          <div className='about__img-wrapper'>
            <img className='img' src={Pastry} alt='Pastries' />
          </div>
          <div className='about__wrapper'>
            <h3 className='about__title'>Customize Your Clouds</h3>
            <p className='about__description'>Mix and match your favorite flavors for a truly unique, personalized vaping experience.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Landing
