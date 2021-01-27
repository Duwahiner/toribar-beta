/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import { jsx, css } from '@emotion/core';
import { dimensions, colors, fonts } from '../../public/global.config';

const styles = {
    childSliderContenido: css`
        width: ${dimensions.containers.width}%;
        height: 100%;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
    `,
    childSliderContenidoTitle: css`
        width: 70%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        display: flex;
        justify-content: center;
        border-bottom: solid 2px ${colors.rgbAlette.rgb27(1)};
        margin-bottom:  20px;
        box-sizing: content-box;
    `,
    contenidoTitle: css`
    ${fonts.fontBahnschrift()}; 
        width: 90%;
        height: auto;
        font-family: fontBahnschrift, sans-serif;
        line-height: 50px;
        font-size: ${fonts.fontSize * 2.6}px;
        font-weight: 700;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 0px;
        margin-bottom: 10px;
        margin-top: 0px;
        box-sizing: border-box;
    `,
    childSliderContenidoPerrafo: css`
        width: 65%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        display: flex;
        justify-content: center;
    `,
    contenidoParrofo: css`
    ${fonts.fontBahnschrift()};
        width: auto;
        height: auto;
        font-family: fontBahnschrift, sans-serif;
        text-align: justify;
        line-height: 30px;
        font-size: ${fonts.fontSize * 1.7}px;
        color: ${colors.rgbAlette.rgb13Negro(0.8)};
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        box-sizing: border-box;
    `,
    containerSliderBotton: css`
        width: 300px;
        height: 55px;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        border-radius: 4px;
        margin-top: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        border: solid 2px ${colors.rgbAlette.rgb13Negro(1)};
        box-sizing: content-box;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        transition: all 0.5s ease;
        &:hover{
            background-color: ${colors.rgbAlette.rgb13Negro(1)};
            color: ${colors.rgbAlette.rgb12Blanco(1)};
        }
    `,
    sliderBotton: css`
    ${fonts.fontBahnschrift()};
        width: auto;
        font-family: fontBahnschrift, sans-serif;
        text-align: center;
        line-height: 55px;
        font-size: ${fonts.fontSize*2}px;
        letter-spacing: 0px;
    `,

    childSliderContenidoSvg: css`
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        margin-bottom: 20px;
    `,
}

const ArticleForCompany = (props) => {
    return (
        <div id={props.id} css={
            css`
                ${styles.childSliderContenido};
                z-index: ${props.zIndex};
                opacity: ${props.opacity}
            `
        }>
            {
                props.svg !== '' ? 
                    <div css={
                        css `
                            ${styles.childSliderContenidoSvg}
                            width: ${props.width}px;
                        `
                    }>
                        {props.svg}
                    </div> : false
            }

            <div css={styles.childSliderContenidoTitle} >
                <h2 css={
                    css `
                        ${styles.contenidoTitle}
                        text-align: ${props.textAlign}
                    `
                }> 
                    {props.articleTitle} 
                </h2>
            </div>

            <div css={styles.childSliderContenidoPerrafo} >
                <p css={styles.contenidoParrofo} > 
                    {props.articleParrafo}
                </p>
            </div>

            { 
                props.botton !== '' ? 
                    <div css={styles.containerSliderBotton}>
                        <span css={styles.sliderBotton}> {props.botton} </span> 
                    </div> : false
            }
            
        </div>
    )
}

export default ArticleForCompany;