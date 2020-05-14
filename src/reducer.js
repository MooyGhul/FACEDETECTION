import {INPUT_IMAGE_LINK} from './constants'

const initialStateImageLink = {
    imageLinkContent = ''
}

export const detectFace = (state=initialStateImageLink, action = {}) => {
    switch(action.type) {
        case INPUT_IMAGE_LINK:
            return { ...state, imageLinkContent: action.payload };
        default:
            return state;
    }
}