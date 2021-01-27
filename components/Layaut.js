/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, { Component } from 'react';
import Head from 'next/head';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, colors, fonts, svg } from '../public/global.config';
import NavTop from '../components/view/header/Nav-top';

const styles = {
    containerApp: css`
        width: 100%;
        height: 100vh;
    `,
    containerChildApp: css`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    `,
    containerHeader: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        position: relative;
        flex: none;
    `,
    containerMain: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: auto;
    `,
    
}
class Layaut extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div  id='containerApp'
                    css={
                        css`
                            ${styles.containerApp};
                            background: ${colors.rgbAlette.rgb24(1)} url(${this.props.img}) center center no-repeat;
                            background-size: cover;
                        `
                    } 
                >

                        
                    <div css={ css `${styles.containerChildApp}` }>
                        <Global 
                            styles={
                                css`
                                    ::-webkit-scrollbar {
                                        width: 3px;
                                        display: none;
                                        background-color: ${colors.rgbAlette.rgb12Blanco(0)};
                                    }
                                    ::-webkit-scrollbar-thumb {
                                        width: 1px;
                                        background-color: ${colors.rgbAlette.rgb24(1)};
                                    }
                                    ::-webkit-scrollbar-thumb:hover {
                                        background-color: ${colors.rgbAlette.rgb13Negro(1)};
                                    }
                                    ::-webkit-scrollbar-track{
                                        background-color: ${colors.rgbAlette.rgb12Blanco(0)};
                                    }
                                   
                                `
                            }
                        />
                        {/*>>>>>>> Head datos claves que definiran la pagina;*/}
                        <Head>
                            <title> {this.props.title} </title>
                            <meta name="description" content="alette, peluqueria, salon de belleza, spas" />
                        </Head>

                        {/*>>>>>>> Header menu de navegacion, slider y entre otro datos de entra de la pagina;*/}
                        <header id='$header'
                            css={
                                css`
                                    ${styles.containerHeader};
                                    background-color: ${colors.rgbAlette.rgb24(0)};
                                `
                            } 
                        >
                            <NavTop
                                setion={this.props.setion} 
                                active={[
                                    { inicio: 'inicio' },
                                    { toribar: 'toribar' },
                                    { marcas: 'marcas' },
                                    { contacto: 'contacto' }
                                ]}
                            />
                        </header>

                        {/*>>>>>>> Main informacion importante de la pagina;*/}
                        <main id='containerMain' css={styles.containerMain}>
                            {  this.props.children }
                        </main>

                    </div>
                </div>
            </>
        )
    }
}

export default Layaut;