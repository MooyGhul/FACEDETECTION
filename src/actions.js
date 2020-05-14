import { INPUT_IMAGE_LINK } from './constants'

export const setImageLink = (text) => ({
    type: INPUT_IMAGE_LINK,
    payload: text
})