/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import { jsx, css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import { dimensions, colors, fonts, svg, } from '../../public/global.config';

const styles = {
    containerContactoCompany: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        flex: none;
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 40px;
    `,
    form: css`
        width: 55%;
        height: auto;
    `,
    containerContactoForm: css`
        width: 100%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
    `,
    containerContactoFormInputs: css`
        width: 100%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
        margin-bottom: 10px;
    `,
    containerContactoFormLabel: css`
        width: 100%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
    `,
    
    contactoFormLabel: css`
    ${fonts.fontBahnschrift()};;
        width: 100%;
        height: auto;
        font-family: fontBahnschrift, sans-serif;
        text-align: left;
        line-height: 30px;
        font-size: ${fonts.fontSize * 1.7}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        font-weight: nombre;
        letter-spacing: 0px;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover{
            color: ${colors.rgbAlette.rgb27(1)};
        }
    `,

    containerContactoFormInput: css`
        width: 100%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
    `,

    contactoFormInput: css`
        ${fonts.fontBahnschrift()};
        width: 100%;
        height: 35px;
        outline: none;
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        font-family: fontAeonikRegular, sans-serif;
        color: ${colors.rgbAlette.rgb27(1)};
        font-size: ${fonts.fontSize * 1.5}px;
        line-height: 35px;
        border: 0px;
        border-bottom: solid 2px ${colors.rgbAlette.rgb13Negro(0.1)} ;
        box-sizing: border-box;
        flex: none;
        transition: all 0.2s linear;
        &:focus{
            border-bottom: solid 2px ${colors.rgbAlette.rgb27(1)};
        }
        &:-internal-autofill-selected {
            background-color: transparent  !important;
        }
        &::placeholder{
            color: ${colors.rgbAlette.rgb13Negro(0.2)};
            font-family: fontBahnschrift, sans-serif;
        }
    `,
    contactoFormTextarea: css`
        ${fonts.fontBahnschrift()};;
        width: 100%;
        max-width: 100%;
        height: 80px;
        max-height: 150px;
        min-height: 50px;
        outline: none;
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        font-family: fontBahnschrift, sans-serif;
        color: ${colors.rgbAlette.rgb27(1)};
        font-size: ${fonts.fontSize * 1.5}px;
        line-height: 35px;
        border: 0px;
        border-bottom: solid 2px ${colors.rgbAlette.rgb13Negro(0.2)} ;
        box-sizing: border-box;
        flex: none;
        transition: all 0.2s linear;
        &:focus{
            border-bottom: solid 2px ${colors.rgbAlette.rgb27(1)};
        }
        &:-internal-autofill-selected {
            background-color: transparent  !important;
        }
        &::placeholder{
            color: ${colors.rgbAlette.rgb13Negro(0.2)};
            font-family: fontBahnschrift, sans-serif;
        }
    `,
    containerContactoFormBottonSubmit: css `
        width: 100%;
        height: 55px;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `,
    contactoFormBottonSubmit: css `
        ${fonts.fontBahnschrift()};;
        width: 100%;
        height: 55px;
        outline: none;
        font-family: fontBahnschrift, sans-serif;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        font-size: ${fonts.fontSize*2}px;
        border: 0px;
        border: solid 2px ${colors.rgbAlette.rgb13Negro(1)};
        box-sizing: border-box;
        border-radius: 4px;
        background-color: ${colors.rgbAlette.rgb24(0)};
        box-sizing: content-box;
        cursor: pointer;
        transition: all 0.5s ease;
        :hover{
            background-color: ${colors.rgbAlette.rgb1(1)};
            border: solid 2px ${colors.rgbAlette.rgb1(1)};
            color: ${colors.rgbAlette.rgb12Blanco(1)};
        }
    `,
}

const ArticleForCompany = (props) => {
 
    return (
        <div css={styles.containerContactoCompany} >
            <form css={styles.form} >
                <div css={styles.containerContactoForm} >
                    
                    {/* Nombre */}
                    <div css={styles.containerContactoFormInputs}>
                        <div css={styles.containerContactoFormLabel} >
                            <label htmlFor='firstName' css={styles.contactoFormLabel}> NOMBRE </label>
                        </div>
                        <div css={styles.containerContactoFormInput} >
                            <input
                                type='text'
                                name='firstName'
                                id='firstName'
                                placeholder='Ok, escribenos tu nombre'
                                css={styles.contactoFormInput} 
                            /> 
                        </div>
                    </div>

                    {/* Apelido */}
                    <div css={styles.containerContactoFormInputs}>
                        <div css={styles.containerContactoFormLabel} >
                            <label htmlFor='lastName' css={styles.contactoFormLabel}> APELLIDO </label>
                        </div>
                        <div css={styles.containerContactoFormInput} >
                            <input
                                type='text'
                                name='lastName'
                                id='lastName'
                                placeholder='Ok, escribenos tu apellido'
                                css={styles.contactoFormInput} 
                            /> 
                        </div>
                    </div>

                    {/* Telefono */}
                    <div css={styles.containerContactoFormInputs}>
                        <div css={styles.containerContactoFormLabel} >
                            <label htmlFor='theTel' css={styles.contactoFormLabel}> TELÉFONO </label>
                        </div>
                        <div css={styles.containerContactoFormInput} >
                            <input
                                type='tel'
                                name='theTel'
                                id='theTel'
                                placeholder='Ok, escribenos tu teléfono'
                                css={styles.contactoFormInput} 
                            /> 
                        </div>
                    </div>

                    {/* Interes */}
                    <div css={styles.containerContactoFormInputs}>
                        <div css={styles.containerContactoFormLabel} >
                            <label htmlFor='theTextarea' css={styles.contactoFormLabel}> CUAL ES TU INTERES </label>
                        </div>
                        <div css={styles.containerContactoFormInput} >
                            <textarea
                                type='textarea'
                                name='theTextarea'
                                id='theTextarea'
                                placeholder='Ok, escribenos tu interes'
                                css={styles.contactoFormTextarea} 
                            /> 
                        </div>
                    </div>

                    <div css={styles.containerContactoFormBottonSubmit}>
                        <button
                            css={styles.contactoFormBottonSubmit}
                            id= 'submit'
                            name='submit'
                            type="submit"
                        > 
                            Continuar con el envío
                        </button>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default ArticleForCompany;