/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import Layaut from './Layaut';
import { dimensions, colors, imgs, svg, fonts } from '../public/global.config';
import FormForContacto from '../components/view/Formulario-of-contacto';

const styles = {
    containerSlider: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: auto;
        display: flex;
        justify-content: center;
    `,
    containerChildSlider: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        display: flex;
    `,
    containerChildSliderEnlace: css`
        width: ${dimensions.containers.width - 65 }%;
        height: auto;
        background: ${colors.rgbAlette.rgb2(1)} url(${imgs.imgs$('toribar')}) center center no-repeat;
        background-size: cover;
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 27.32px;
        box-sizing: border-box;
    `,

    sliderTitle: css`
    ${fonts.fontBahnschrift()};
        width: auto;
        height: auto;
        font-family: fontBahnschrift, sans-serif;
        text-align: left;
        display: inline-block;
        line-height: 50px;
        font-size: ${fonts.fontSize * 4}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        font-weight: 700;
        background-color: ${colors.rgbAlette.rgb1(0)};
        letter-spacing: 1px;
        margin-bottom: 0px;
        margin-top: 30px;
        box-sizing: border-box;
    `,
    containerSliderBotton: css`
        width: 300px;
        height: 55px;
        background-color: ${colors.rgbAlette.rgb27(1)};
        flex: none;
        border-radius: 4px;
        margin-top: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        transition: all 0.5s ease;
        &:hover{
            background-color: ${colors.rgbAlette.rgb1(1)};
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

    containerSliderSpanAnime: css`
        width: auto;
        height: auto;
        background-color: ${colors.rgbAlette.rgb27(0)};
        flex: none;
        margin-top: 30px;
        margin-bottom: 30px;
        color: ${colors.rgbAlette.rgb27(1)};
    `,
    sliderSpanAnime: css`
    ${fonts.fontBahnschrift()};
        width: auto;
        display: block;
        font-family: fontBahnschrift, sans-serif;
        text-align: left;
        line-height: 35px;
        font-size: ${fonts.fontSize * 2}px;
        letter-spacing: 0px;
    `,

    containerChildSliderContenido: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
        flex: auto;
        position: relative;
        display: flex;
        align-items: center;
    `,

    containerSliderSpanRedes: css`
    ${fonts.fontBahnschrift()};
        width: auto;
        height: 35px;
        display: flex;
        margin-top: 20px;
        font-family: fontBahnschrift, sans-serif;
        background-color: ${colors.rgbAlette.rgb27(0)};
        text-align: left;
        line-height: 35px;
        font-size: ${fonts.fontSize * 2}px;
        letter-spacing: 0px;

    `,

    sliderSpanRedes: css`
    ${fonts.fontBahnschrift()};
        width: 35px;
        height: 35px;
        display: block;
        margin-right: 20px;
        font-family: fontBahnschrift, sans-serif;
        background-color: ${colors.rgbAlette.rgb27(1)};
        text-align: left;
        line-height: 35px;
        font-size: ${fonts.fontSize * 2}px;
        letter-spacing: 0px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
           background-color: ${colors.rgbAlette.rgb1(1)};
        }
    `,
    navA: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
}

const Contacto = (props) => {
    return (
        <Layaut
            title='Contacto'
            activeFooter={true}
            setion='contacto'
            img={imgs.imgs$('toribar')}
        >
            <div css={styles.containerSlider}>
                <div css={styles.containerChildSlider}>
                    <div css={styles.containerChildSliderEnlace} >
                        <h1 css={styles.sliderTitle} >
                        Hola, <pre></pre> como te ayudamos
                        </h1>
                        <div css={styles.containerSliderSpanAnime}>
                            <span css={styles.sliderSpanAnime}> Siguenos como lo prefieras </span> 
                            <div css={styles.containerSliderSpanRedes}>
                                <div css={styles.sliderSpanRedes}> <ReactSVG src={svg.svg$('redes-01')} /> </div> 
                                <div css={styles.sliderSpanRedes}> <ReactSVG src={svg.svg$('redes-02')} /> </div> 
                                <div css={styles.sliderSpanRedes}> <ReactSVG src={svg.svg$('redes-03')} /> </div> 
                                <div css={styles.sliderSpanRedes}> <ReactSVG src={svg.svg$('redes-04')} /> </div> 
                            </div>
                            
                        </div>
                        <Link href='/marcas' >
                            <div css={styles.containerSliderBotton}>
                                <a css={styles.navA}>
                                    <span css={styles.sliderBotton}> VER MARCAS TORIBAR → </span> 
                                </a>
                            </div>
                        </Link>
                    </div>

                    <div css={styles.containerChildSliderContenido} > 
                        <FormForContacto />
                    </div>
                </div>
            </div>
        </Layaut>
    )
}
export default Contacto;