

export type ItemData = {
    x: number
    y: number
    width: number
    height: number
    scaleX: number
    scaleY: number
    alpha: number
    hidden: boolean
    disabled: boolean
    elementType: 'text' | 'img' | 'video' | 'shape-rect' | 'shape-circle'
}

const ItemDataDefault = (): ItemData => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    scaleX: 1,
    scaleY: 1,
    alpha: 1,
    hidden: false,
    disabled: false,
    elementType: 'text',
})

export type TextItemData = ItemData & {
    fontSize: number
    fontBold: boolean
    fontItalc: boolean
    fontColor: string
    fontFamily: string
    textContent: string
}

const TextItemDataDefault = ():TextItemData  => ({
    ...ItemDataDefault(),
    elementType: 'text',
    fontSize: 12,
    fontBold: false,
    fontItalc: false,
    fontColor: '#000000',
    fontFamily: 'unset',
    textContent: ''
})

export type ImageItemData = ItemData & {
    objectFit: 'fill' | 'contain',
    src: string
}

const ImageItemDataDefault = (): ImageItemData => ({
    ...ItemDataDefault(),
    elementType: 'img',
    src: '',
    objectFit: 'contain'
})

type VideoItemData = ImageItemData & {
    autoPlay: boolean
    controls: boolean
}

const VideoItemDataDefault = (): VideoItemData => ({
    ...ImageItemDataDefault(),
    elementType: 'video',
    autoPlay: false,
    controls: false
})


// 文本
const createText = (data: Partial<TextItemData>) => {
    return { ...TextItemDataDefault(), ...data }
}

// 图片
const createImage = (data: Partial<ImageItemData>) => {
    return { ...ImageItemDataDefault(), ...data }
}

// 视频
const createVideo = (data: Partial<VideoItemData>) => {
    return { ...VideoItemDataDefault(), ...data }
}

// 图形


export const UiEditorCreator = { 
    createText,
    createImage,
    createVideo,
}
