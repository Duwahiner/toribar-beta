/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { jsx, css } from '@emotion/core';
import Layaut from './Layaut';
import Link from 'next/link';
import { dimensions, colors, imgs, svg, fonts } from '../public/global.config';

const styles = {
    containerSlider: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    containerChildSlider: css`
        width: ${dimensions.containersChild.width}%;
        height: 66px;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `,

    sliderTitle: css`
    ${fonts.fontBahnschrift()};
        width: auto;
        height: auto;
        font-family: fontBahnschrift, sans-serif;
        text-align: left;
        display: inline-block;
        line-height: 70px;
        font-size: ${fonts.fontSize * 6.4}px;
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
        height: 55px;
        background-color: ${colors.rgbAlette.rgb27(0)};
        flex: none;
        margin-top: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        color: ${colors.rgbAlette.rgb4(1)};
    `,
    sliderSpanAnime: css`
    ${fonts.fontBahnschrift()};
        width: auto;
        font-family: fontBahnschrift, sans-serif;
        text-align: center;
        line-height: 30px;
        font-size: ${fonts.fontSize*2.5}px;
        letter-spacing: 0px;
    `,
    navA: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
}

const Inicio = (props) => {
    return (
        <Layaut
            title='Inicio'
            activeFooter={true}
            setion='inicio'
            img={imgs.imgs$('inicio-2')}
        >
            <div css={styles.containerSlider}>
                <div css={styles.containerChildSlider}>
                    <h1 css={styles.sliderTitle} >
                    Conectamos tus <pre></pre> sueños con distintas <pre></pre> experiencias
                    </h1>
                    <div css={styles.containerSliderSpanAnime}>
                        <span css={styles.sliderSpanAnime}> Alimentacion para mascotas </span> 
                    </div>
                    <Link href='/toribar' >
                        <div css={styles.containerSliderBotton}>
                            <a css={styles.navA}>
                                <span css={styles.sliderBotton}> QUIERO SABER MÁS → </span> 
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
        </Layaut>
    )
}
export default Inicio;