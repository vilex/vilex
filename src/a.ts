import { div, store, css } from 'vilex'
function cc(...args: any) {
  return 1 as any
}
function veri(...args: any) {
  return 1 as any
}
const api: any = 1

const RowClass = css`
  display: flex;
  flex-direction: row;
`

// global
const Col = cc(`div`, RowClass)
const Row = cc(`div`, 'row-classname')
const Checkbox = cc(`checkbox`, 'checkbox-classname')

// local
const Login = cc(`div`, { name: 'haha' }, 'classname-1', 'classname-2')
const LoginTitle = cc(`div`, 'classname-3', 'classname-4')

const LoginInput = cc(
  `input`,
  css`
    outline: none;
    &:hover {
      background-color: red;
    }
  `
)
const LoginButton = cc(`button`, 'button-classname')

const loginData = store({
  username: '',
  password: ''
})

// handlers
const toLogin = () => veri(loginData) && api.post(loginData)

export default Login(
  LoginTitle('login title'),
  Col(
    LoginInput({ value: '', placeholder: 'Please enter your username' }),
    LoginInput({ value: '', placeholder: 'Please enter your password' })
  ),
  Row(
    Checkbox('记住密码', true),
    LoginButton(`登录`, {
      onclick: toLogin
    })
  )
)
