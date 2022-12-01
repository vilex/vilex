import { Styled } from '../styled'

export type IDataType = { $dataType?: string }
export type IStyle = Partial<Styled> & IDataType
export type IAttr = IDataType
export type IClass = IDataType
export type IEvents = IDataType
