import { DivElement } from './../../web-native-elements/elements/DivElement';
import { BaseElement } from '../../web-native-elements/base/BseElement'
import { VilexElement } from '../VilexElement'

export class ArrayElement<T> extends VilexElement {

    /**
     * 数据源，数组
     */
    array: T[] = [] 

    /**
     * 渲染器，迭代数组中的每一个元素
     */
    itemRender: (item: T, index: number) => (VilexElement | BaseElement)

    

    constructor(data: Partial<ArrayElement<T>>) {
        super()
        super.initial(data)

        // 监听数组的变化

    }

    render() {
        return new DivElement({

        })
    }


}