import React from 'react'

export default props => {
    if(props.test) {
        /**se props.test for VERDADEIRO, retorne o objeto dentro da tag If */
        return props.children
    } else {
        return false
    }
}