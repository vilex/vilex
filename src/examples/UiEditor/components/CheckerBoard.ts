import { DivElement } from "../../../../packages/new_vilex/src"
import { css } from "../../../../packages/new_vilex/src/styled"

const classname = css`
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-color: white;
    --checkerboard-black-color: #f8f9f9;
    --checkerboard-white-color: transparent;
    background-image: linear-gradient(45deg,var(--checkerboard-black-color) 25%,
        var(--checkerboard-white-color) 25%),
        linear-gradient(-45deg,var(--checkerboard-black-color) 25%,
        var(--checkerboard-white-color) 25%),
        linear-gradient(45deg,var(--checkerboard-white-color) 75%,
        var(--checkerboard-black-color) 75%),
        linear-gradient(-45deg,var(--checkerboard-white-color) 75%,
        var(--checkerboard-black-color) 75%);
    background-position: 0 0,0 10px,10px -10px,-10px 0;
    background-size: 20px 20px;
`

/**
 * 黑白透明格子背景
 * @returns 
 */
export const CheckerBoard = () => {
    return DivElement({ classList: [ classname ] })
}