import React from 'react'
import imgOne from '../assets/images/image-retro-pcs.jpg'
import imgTwo from '../assets/images/image-top-laptops.jpg'
import imgThree from '../assets/images/image-gaming-growth.jpg'


export default function Section(){


    return (
        <section>
            <ul>
                <li>
                    <img src={imgOne} alt='computer'></img>
                    <div>
                        <span>01</span>
                        <h4>Reviving retro PCs</h4>
                        <p>What happens when old PCs are given moder upgrades?</p>
                    </div>
                </li>
                <li>
                    <img src={imgTwo} alt='keyboard'></img>
                    <div>
                        <span>02</span>
                        <h4>Top 10 Laptops of 2022</h4>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </li>
                <li>
                    <img src={imgThree} alt='levitating pad'></img>
                    <div>
                        <span>03</span>
                        <h4>THe Growth of Gaming</h4>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}