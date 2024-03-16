import React from 'react'
import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export default function Home(){

    const [image, setImage] = React.useState(window.innerWidth>375? imageDesktop : imageMobile)

    React.useEffect(()=>{
        function changeImage(){
            setImage(window.innerWidth>375? imageDesktop : imageMobile)
        }
        window.addEventListener('resize', changeImage)
        return () => window.removeEventListener('resize', changeImage)
    },[])


    return (
        <article>
            <img className='article-image' src={image}/>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
                <p>We dive into the next evolution of the web that claims 
                    to put the power of the platforms back into the hands of the people.
                    But is it really fulfilling its promise?</p>
                <button>read more</button>
            </div>

        </article>
    )
}