import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config, useSpring } from 'react-spring'
import './slideshow.css'

const slides = [
  { id: 0, url: 'photo-1585076800574-8fe7fd4f8b3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9' },
  { id: 1, url: 'photo-1506886009355-7f3af05dd5d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9' },
  { id: 2, url: 'photo-1565520195621-e1613c326d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9' },
  { id: 3, url: 'photo-1507048048024-c5ee15959e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9' },
]

const Image = ({ url, duration }) => {
  const props = useSpring({
    from: {
      transform: 'scale(1) translateX(0%)',
    },
    to: {
      transform: 'scale(2) translateX(10%)',
    },
    config: {
      duration: duration - 200,
    },
  })
  return <animated.div class="bge" style={{ ...props, backgroundImage: url }} />
}

function Slideshow(){
  const duration = 7000;
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), duration), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={{ ...props }}>
      <Image url={`url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`} duration={duration} />
    </animated.div>
  ))
}


export { Slideshow as default };

















// import { render } from 'react-dom'
// import React, { useState, useEffect } from 'react'
// import { useTransition, animated, config, useSpring } from 'react-spring';
// import { img1 } from './jamesMadison.jpg'
// import { img2 } from './alexanderHamilton.jpg'



// const slides = [
//     { id: 0, img: 'img1' },
//     { id: 1, img: 'img2' },
//     { id: 2, img: 'img1' },
//     { id: 3, img: 'img2' },
//   ]
  
//   const Image = ({ img, duration }) => {
//     const props = useSpring({
//       from: {
//         transform: 'scale(1) translateX(0%)',
//       },
//       to: {
//         transform: 'scale(2) translateX(20%)',
//       },
//       config: {
//         duration: duration - 200,
//       },
//     })
//     return <animated.div class="bg" style={{ ...props, backgroundImage: img }} />
//   }
  
//   const App = () => {
//     const duration = 5000
//     const [index, set] = useState(0)
//     const transitions = useTransition(slides[index], item => item.id, {
//       from: { opacity: 0 },
//       enter: { opacity: 1 },
//       leave: { opacity: 0 },
//       config: config.molasses,
//     })
//     useEffect(() => void setInterval(() => set(state => (state + 1) % 4), duration), [])
//     return transitions.map(({ item, props, key }) => (
//       <animated.div key={key} style={{ ...props }}>
//         <Image src={item.img} duration={duration} />
//       </animated.div>
//     ))
//   }
  
//   render(<App />, document.getElementById('root'))
  