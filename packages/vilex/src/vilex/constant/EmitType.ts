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
  ON_PROXY_CHANGE = 'on_proxy_change',
  ON_DELETE_PORPERTY = `ON_DELETE_PORPERTY`,
  on_list_view_change = 'on_list_view_change'
  // todo ... 增加一个添加的事件？
}
