import { isStyled } from '../../vilex-dom/utils/isStyled'
import { VnItem } from '../../vilex-dom/vn'
import { DataProxy } from './DataProxy'

//@ts-ignore
type IDataModelProps = Record<string, unknown | IDataModelProps>
export interface IDataModel {
  text: IDataModelProps
  type: string
  props: IDataModelProps
  style: IDataModelProps
  event: IDataModelProps
  class: IDataModelProps
  hover: IDataModelProps | undefined
  //@ts-ignore
  set: (...datas: VnItem[]) => IDataModel
  // reset: (...datas: any[]) => IDataModel
}

type IDataModelOptions = Partial<IDataModel>

const reservedKey = ['$dataType', 'emit', 'on']

export function DataModel(type: string): IDataModel {
  const dataModel = {} as IDataModelOptions
  dataModel.type = type
  dataModel.text = DataProxy({})
  dataModel.props = DataProxy({})
  dataModel.style = DataProxy({})
  dataModel.class = DataProxy({})
  dataModel.event = DataProxy({})

  //@ts-ignore
  dataModel.set = (...datas: VnItem[]) => {
    const dm = dataModel as IDataModelOptions
    forDataList(datas, (item: { $dataType: string | number } & VnItem) => {
      if (item.$dataType) {
        //@ts-ignore
        if (!dm[item.$dataType]) {
          //@ts-ignore
          dm[item.$dataType] = item
        } else {
          for (const k in item) {
            if (!reservedKey.includes(k)) {
              // @ts-ignore
              dm[item.$dataType][k] = (item as VnItem)[k]
            }
          }
        }
      }
      const styled = isStyled(item)
      styled && Reflect.set(dataModel.class as IDataModelProps, styled.classname, true)
    })
    return dataModel as IDataModel
  }
  return dataModel as IDataModel
}

function forDataList<T extends VnItem>(list: (T | VnItem)[], handler: (vn: T) => void) {
  list.forEach(data => {
    if (data) {
      const item = typeof data === 'function' ? data() : data
      if (item != null && item != undefined) {
        handler(item as T)
      }
    }
  })
}
