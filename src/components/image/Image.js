/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useState}  from 'react'
import {DarkContext} from '../container/Container'
import styles from './image.module.scss'

export default function ImageUmix(
    {
        children,
        className,
        style,
        dark,
        src,
    }) {

    const [isLoading, setIsLoading] = useState(false);
    const [color, setColor] = useState('')

    useEffect(() => {
        let img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => getAverageRGB(img)

        function getAverageRGB(imgEl) {
            let blockSize = 5,
            defaultRGB = {r:0,g:0,b:0},
            canvas,
            context,
            data, width, height,
            i = -4,
            length,
            rgb = {r:0,g:0,b:0},
            count = 0;

            canvas = document.createElement('canvas')
            context = canvas.getContext('2d')
            if (!context) {
                return defaultRGB;
            }
            height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
            width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

            context.drawImage(imgEl, 0, 0);

            data = context.getImageData(0, 0, width, height);
            
            length = data.data.length;
            
            while ( (i += blockSize * 4) < length ) {
                ++count;
                rgb.r += data.data[i];
                rgb.g += data.data[i+1];
                rgb.b += data.data[i+2];
            }

            rgb.r = ~~(rgb.r/count);
            rgb.g = ~~(rgb.g/count);
            rgb.b = ~~(rgb.b/count);

            let c = 0.2126*rgb.r + 0.7152*rgb.g + 0.0722*rgb.b;
            let color = c < 128 ? "white" : "black";
            setColor(color);
            setIsLoading(true)
        }
    }, []);

    const darkContainer = useContext(DarkContext)
    if(!isLoading) return <div>Loading...</div>
    return (
        <div 
            style={{
                ...style,
                backgroundImage: `url(${src})`,
                color: color,
            }} 
            className={styles.image + " " + className}
        >
            {children}
        </div>
    )
}