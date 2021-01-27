/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { dimensions, colors, svg , fonts } from '../../../public/global.config';

const styles = {
    containerNavTop: css`
        width: ${dimensions.containers.width}%;
        height: 70px;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
        display: flex;
        flex: none;
        justify-content: center;
        border-bottom: 1px solid ${colors.rgbAlette.rgb13Negro(0.1)};
        box-sizing: border-box;
    `,
    containerChildNavTop: css`
        width: ${dimensions.containersChild.width}%;
        height: 70px;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: none;
        display: flex;
    `,
    containerNavTopLogo: css`
        width: auto;
        height: 70px;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: auto;
        display: flex;
        align-items:  center;
    `,
    containerNavTopLogoSvg: css`
        width: 174px;;
        height: 50px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: none;
    `,
    containerNavTopSetion: css`
        width: auto;
        height: 50px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: none;
        margin-left: 30px;
        border-left: 3px solid ${colors.rgbAlette.rgb12Blanco(0)};
    `,
    containerNavTopSpan: css`
    ${fonts.fontAeonikLight()};
        width: auto;
        font-family: fontAeonikLight, sans-serif;
        text-align: center;
        line-height: 50px;
        font-size: ${fonts.fontSize*1.7}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 1px;
        margin-bottom: 0px;
        padding-left: 20px;
        box-sizing: border-box;
    `,
    containerNavTopMenuSvg: css`
        width: auto;
        height: 70px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        flex: none;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    containerIconMenuSvg: css`
        width: auto;
        height: 35px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        flex: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${colors.rgbAlette.rgb12Blanco(0)};
        border-radius: 4px;
        box-sizing: content-box;
        cursor:  pointer;
        transition: all 0.5s ease;
        &:hover{
            border: 2px solid ${colors.rgbAlette.rgb12Blanco(1)};
        }
    `,
    navA: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
    spanMenu: css`
        ${fonts.fontBahnschrift()};
        width: auto;
        height: 35px;
        display: block;
        font-family: fontBahnschrift, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*1.7}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        line-height: 35px;
        text-transform: 'uppercase';
        margin-left: 20px;
        padding-left: 0px;
        box-sizing: border-box;
        transition: all 0.5s ease;
        cursor: pointer;
        &:hover{
            color: ${colors.rgbAlette.rgb27(1)};
        }
    `,
}

const NavTop = (props) => {
    props.active.filter( value => {
        if( props.setion === value[ props.setion ] ){ 
            return value[ props.setion ] = colors.rgbAlette.rgb1(1)
        }
    })
    return (
        <div css={styles.containerNavTop}>
            <div css={styles.containerChildNavTop}>
                <div css={styles.containerNavTopLogo}>
                    <div css={styles.containerNavTopLogoSvg} > <ReactSVG src={svg.svg$('logo_top')} /> </div>
                    <div css={styles.containerNavTopSetion}>
                        <span css={styles.containerNavTopSpan}> {/*props.setion*/} </span>
                    </div>
                </div>
                <div css={styles.containerNavTopMenuSvg}>
                    <div id='bottonOpen' css={styles.containerIconMenuSvg}  >
                        <Link href='/'>
                            <a css={styles.navA} > <span style={{ color: `${ props.active[0].inicio }` }} css={styles.spanMenu}> Inicio </span> </a>
                        </Link>
                        <Link href='/toribar'>
                            <a css={styles.navA} > <span style={{ color: `${ props.active[1].toribar }` }} css={styles.spanMenu}> Toribar </span> </a>
                        </Link>
                        <Link href='/marcas'>
                            <a css={styles.navA} > <span style={{ color: `${ props.active[2].marcas }` }} css={styles.spanMenu}> Nuestras marcas </span> </a>
                        </Link>
                        <Link href='/contacto'>
                            <a css={styles.navA} > <span style={{ color: `${ props.active[3].contacto }` }} css={styles.spanMenu}> Contacto </span> </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTop;