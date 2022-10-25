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
  // dataModel.reset = (...datas: any[]) => {
  //   forDataList(datas, (item: { $dataType: string | number }) => {
  //     if (item.$dataType && dataModel[item.$dataType]) {
  //       dataModel[item.$dataType] = item
  //     }
  //   })
  //   return dataModel as IDataModel
  // }
  //@ts-ignore
  dataModel.set = (...datas: VnItem[]) => {
    forDataList(datas, (item: { $dataType: string | number }) => {
      if (item.$dataType) {
        //@ts-ignore
        if (!(dataModel as IDataModelOptions)[item.$dataType]) {
          //@ts-ignore
          ;(dataModel as IDataModelOptions)[item.$dataType] = item
        } else {
          for (const k in item) {
            if (!reservedKey.includes(k)) {
              // @ts-ignore
              ;(dataModel as IDataModelOptions)[item.$dataType][k] = (
                item as VnItem
              )[k]
            }
          }
        }
      }
      const styled = isStyled(item)
      if (styled) {
        Reflect.set(dataModel.class as IDataModelProps, styled.classname, true)
      }
    })
    return dataModel as IDataModel
  }
  return dataModel as IDataModel
}

function forDataList(list: VnItem[], handler: (vn: VnItem) => void) {
  list.forEach(data => {
    if (data) {
      const item = typeof data === 'function' ? data() : data
      if (item != null && item != undefined) {
        handler(item)
      }
    }
  })
}
