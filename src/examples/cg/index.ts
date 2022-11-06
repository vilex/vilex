import { css, div, h1, img, ref, span, video } from 'vilex'
import BackgroundVideo from './background.mp4'
import Logo from './logo.png'

const css_full = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`
const css_mask = css`
  background-color: #040404fc;
  transition: transform 2s;
  text-align: center;
`
const css_mask_t = css`
  left: 0;
  top: -100%;
`
const css_mask_b = css`
  left: 0;
  bottom: -100%;
`
const css_text = css`
  transition: opacity 2s;
  color: white;
  font-weight: bold;
  line-height: 100px;
  letter-spacing: 4px;
  font-size: 2rem;
`
const css_img = css`
  bottom: 30px;
  position: absolute;
  transform: translateX(-50%);
`

export function cg() {
  const maskTTranslateY = ref(`translateY(0%)`)
  const maskBTranslateY = ref(`translateY(0%)`)
  const textOpacity = ref(0)

  function playAni() {
    setTimeout(() => {
      maskTTranslateY.value = `translateY(35%)`
      maskBTranslateY.value = `translateY(-35%)`
    }, 1000)

    setTimeout(() => {
      textOpacity.value = 0.6
    }, 4000)
  }

  return div(
    css_full,
    video(
      css_full,
      {
        objectFit: 'cover'
      },
      {
        src: BackgroundVideo,
        autoplay: 'autoplay',
        loop: 'loop',
        muted: true
      },
      {
        oncanplaythrough: playAni
      },
      `background video`
    ),
    div(
      css_full,
      css_mask,
      css_mask_t,
      {
        transform: maskTTranslateY
      },
      img(
        css_img,
        {
          alt: `VILEX`,
          src: Logo
        },
        {
          opacity: textOpacity
        },
        css_text
      )
    ),
    div(
      css_full,
      css_mask,
      css_mask_b,
      {
        transform: maskBTranslateY
      },
      span(
        `快速构建您的Web应用`,
        {
          opacity: textOpacity
        },
        css_text
      )
    )
  )
}
