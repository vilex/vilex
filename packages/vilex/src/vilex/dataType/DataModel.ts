import { DataProxy } from './DataProxy'

type IDataModelProps = { [k: string]: any }
export interface IDataModel {
  text: any
  type: string
  props: IDataModelProps
  style: IDataModelProps
  event: IDataModelProps
  class: IDataModelProps
  hover: IDataModelProps | undefined
  set: (...datas: any[]) => IDataModel
  // reset: (...datas: any[]) => IDataModel
}

type IDataModelOptions = Partial<IDataModel>

const reservedKey = ['$dataType', 'emit', 'on']

export function DataModel(type: string): IDataModel {
  const dataModel = {} as IDataModelOptions
  dataModel.type  = type
  dataModel.text  = DataProxy({})
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
  dataModel.set = (...datas: any[]) => {
    forDataList(datas, (item: { $dataType: string | number }) => {
      if (item.$dataType) {
        if (!(dataModel as any)[item.$dataType]) {
            (dataModel as any)[item.$dataType] = item
          } else {
            for (const k in item) {
              if (!reservedKey.includes(k)) {
                // @ts-ignore
                (dataModel as any)[item.$dataType][k] = (item as any)[k]
              }
            }
          }
      }
    })
    return dataModel as IDataModel
  }
  return dataModel as IDataModel
}

function forDataList(list: any[], handler: Function) {
  list.forEach((data) => {
    if (data) {
      const item = typeof data === 'function' ? data() : data
      if (item != null && item != undefined) {
        handler(item)
      }
    }
  })
}
