// export const ON_NODE_CHANGE = Symbol()
// export const ON_PROXY_CHANGE = Symbol()

export enum EmitType {
  _,
  Clear,
  RemoveChild,
  AppendChild,
  InsertChild,
  UpdateText = 'text',
  UpdateProps = 'props',
  UpdateStyle = 'style',
  UpdateClass = 'class',
  Event = 'event',
  
  ON_NODE_CHANGE = 'on_node_change',
  ON_PROXY_CHANGE = 'on_proxy_change'
}
