/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, {useEffect} from 'react';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import Layaut from './Layaut';
import { dimensions, colors, imgs, svg, fonts } from '../public/global.config';
import ArticleForMarcas from '../components/view/Article-for-marcas';

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
        cursor: pointer;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
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
        transition: all 0.5s ease;
        &:hover{
            color: ${colors.rgbAlette.rgb1(1)};
        }
    `,

    containerChildSliderContenido: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
        flex: auto;
        position: relative;
    `,
    navA: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
}

const Inicio = (props) => {
    let articleElenentDomArray 

    useEffect( () => {
        articleElenentDomArray = [].slice.call(  document.getElementById('marcasToribar').children )
    })

    const mostrarArticulo = ( event ) => {
        let { value } = event.target.attributes.name;
        articleElenentDomArray.filter( ( { id } ) => {

            if( id === value ) {
                document.getElementById( id ).style.zIndex = 100;
                document.getElementById( id ).classList.add( 'fadeOpacity' );
            }
            else { 
                return document.getElementById( id ) 
            }

        }).map( ( element ) => {
            element.style.opacity = 0;
            element.style.zIndex = 10;
            element.classList.remove( 'fadeOpacity' )
        });
    }

    return (
        <Layaut
            title='Nuestras marcas'
            activeFooter={true}
            setion='marcas'
            img={imgs.imgs$('inicio-2')}
        >
            <div css={styles.containerSlider}>
                <div css={styles.containerChildSlider}>
                    <div css={styles.containerChildSliderEnlace} >
                        <h1 css={styles.sliderTitle} >
                        Estas son <pre></pre> nuestras marcas
                        </h1>
                        <div css={styles.containerSliderSpanAnime}>
                            <span name='marcaT5-56' css={styles.sliderSpanAnime} onClick={ mostrarArticulo } > T5-56 → </span> 
                            <span name='marcaDoogsk' css={styles.sliderSpanAnime} onClick={ mostrarArticulo } > Doogsk → </span> 
                            <span name='marcaAlette' css={styles.sliderSpanAnime} onClick={ mostrarArticulo } > Alette → </span> 
                            <span name='marcaTolentino' css={styles.sliderSpanAnime} onClick={ mostrarArticulo } > Tolentino Constructora → </span> 
                        </div>
                        <Link href='/contacto'>
                            <div css={styles.containerSliderBotton}>
                                <a css={styles.navA} >
                                    <span css={styles.sliderBotton}> CONTACTARNOS → </span> 
                                </a>
                            </div>
                        </Link>
                    </div>

                    <div id='marcasToribar' css={styles.containerChildSliderContenido} > 
                        
                        <ArticleForMarcas
                            id = 'articleHola'
                            svg= ''
                            textAlign = 'center'
                            zIndex = '10'
                            opacity = '1'
                            botton = ''
                            articleTitle = 'Bienvenido, a las marcas Toribar'
                            articleParrafo ='Ok. Para saber con detalles de nuestras marcas sólo debe dirigirte al menú del lado hizquierdo
                            y empezar a conocer todo sobre las marcas Toribar. El boton de color amarillo te llevará a la sesión de contacto por 
                            si deseas ecribirnos.' 
                        />

                        <ArticleForMarcas
                            id = 'marcaT5-56'
                            width = {200}
                            svg= {<ReactSVG src= {svg.svg$('t5-56')} />}
                            textAlign = 'center'
                            zIndex = '11'
                            opacity = '0'
                            articleTitle = 'Que es'
                            botton = 'VISITAR EL SITIO WEB →'
                            articleParrafo ='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                                texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                                distribución más o menos normal.'
                        />

                        <ArticleForMarcas
                            id = 'marcaDoogsk'
                            width = {280}
                            svg= {<ReactSVG src= {svg.svg$('doogsk')} />}
                            textAlign = 'center'
                            zIndex = '3'
                            opacity = '0'
                            articleTitle = 'Que es'
                            botton = 'VISITAR EL SITIO WEB →'
                            articleParrafo ='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                                texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                                distribución más o menos normal.'
                        />
                        <ArticleForMarcas
                            id = 'marcaAlette'
                            width = {240}
                            svg= {<ReactSVG src= {svg.svg$('alette')} />}
                            textAlign = 'center'
                            zIndex = '4'
                            opacity = '0'
                            articleTitle = 'Que es'
                            botton = 'VISITAR EL SITIO WEB →'
                            articleParrafo ='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                                texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                                distribución más o menos normal.'
                        />

                        <ArticleForMarcas
                            id = 'marcaTolentino'
                            width = {260}
                            svg= {<ReactSVG src= {svg.svg$('tolentino')} />}
                            textAlign = 'center'
                            zIndex = '5'
                            opacity = '0'
                            articleTitle = 'Que es'
                            botton = 'VISITAR EL SITIO WEB →'
                            articleParrafo ='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                                texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                                distribución más o menos normal.'
                        />

                    </div>
                </div>
            </div>
        </Layaut>
    )
}
export default Inicio;