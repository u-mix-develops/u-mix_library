/* eslint-disable prettier/prettier */
import React, {useEffect, useState}  from 'react'
import styles from './image.module.scss'

let imgWidth;
let imgHeight;

export default function ImageUmix(
    {
        children,
        className,
        style,
        contentClassName,
        contentStyle,
        src,
        minWidth,
        blockPosition,
        textPosition,
        speed
    }) {

    const [color, setColor] = useState('')
    const [coords, setCoords] = useState('50% 50%')

    useEffect(() => {
        const updateImgPosition = () => {
            let speedIs = speed / 1000;
            let yPos = -(content.scrollTop * speedIs);
        
            setCoords('50% calc(50% - ' + yPos + 'px)');
        };
        let content = document.getElementById("content");
        content.addEventListener('scroll', updateImgPosition)

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

            imgWidth = imgEl.width;
            imgHeight = imgEl.height;

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
        }
        return () => {
            content.removeEventListener('scroll', updateImgPosition)
        }
    }, []);

    if(!color) return <div>Loading...</div>
    return (
        <div 
            id="image"
            style={
                    {
                        minWidth: minWidth,
                        backgroundImage: `url(${src})`,
                        backgroundPosition: coords,
                        color: color,
                        ...style,
                    }
            }
            className={
                styles.image + " " +
                (blockPosition.split(" ")[0] === "left" ? styles.left : 
                    (blockPosition.split(" ")[0] === "right" ? styles.right : "") 
                ) + " " +
                (blockPosition.split(" ")[1] === "top" ? styles.top :
                    (blockPosition.split(" ")[1] === "bottom" ? styles.bottom : "")
                ) + " " +
                (className ? className : "")
            }
        >
            <div 
                style={{
                    contentStyle
                }} 
                className={
                    styles.content + " " +
                    (textPosition === "left" ? styles.text_left : 
                        (textPosition === "right" ? styles.text_right : 
                            (textPosition === "center" ? styles.text_center : "")
                        )
                    ) + " " +
                    (contentClassName ? contentClassName : "")
                }
            >
                {children}
            </div>
        </div>
    )
}