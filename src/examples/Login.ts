import { store } from 'vilex'
import { createElement, css } from 'vilex'
import { Col } from './common/Col'
import { Input } from './common/Input'

const Login = createElement(
  'div',
  css`
    width: 400px;
    border-radius: 3px;
    padding: 16px 30px;
    margin: 0 auto;
    margin-top: 200px;
    background-color: white;
    box-shadow: 0 6px 16px 0 #d6e0e8;
  `
)

const LoginTitle = createElement(
  'p',
  css`
    color: #999999;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  `
)

const SplitLine = createElement(
  'hr',
  css`
    color: #999999;
    text-align: center;
    border-top: 1px solid #f8f8f8;
    margin-top: 30px;
    margin-bottom: 60px;
    &::after {
      content: '🌱';
      background-color: white;
      position: relative;
      top: -10px;
      padding: 0 30px;
    }
  `
)

const LoginInput = createElement(
  Input,
  css`
    margin-bottom: 16px;
  `
)

const LoginButton = createElement(
  'button',
  css`
    color: white;
    border: 0;
    padding: 8px 16px;
    border-radius: 3px;
    background-color: #38c88b;
    width: 120px;
    align-self: flex-end;
    margin-top: 30px;
    margin-bottom: 20px;
    transition: background-color 0.3s;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: #16a76a;
    }
  `
)

const usr = store({ name: '', code: '' })

const loginHandler = () => alert(`登录成功`)

export default Login(
  LoginTitle('登录'),
  SplitLine(),
  Col(
    LoginInput({
      placeholder: '请输入手机号',
      value: usr.name
    }),
    LoginInput({
      placeholder: '请输入密码',
      value: usr.code
    }),
    LoginButton('登 录', { onclick: loginHandler })
  )
)
