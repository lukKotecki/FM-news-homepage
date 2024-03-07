import React from 'react'
import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export default function Home(){

    const [image, setImage] = React.useState(imageMobile)

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
        </article>
    )
}