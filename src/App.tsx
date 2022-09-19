import React from 'react';
import bottle from './assets/bottle_tile.png'
import cabbage from './assets/cabbage_tile.png'
import carrot from './assets/carrot_tile.png'
import corn from './assets/corn_tile.png'
import fire from './assets/fire_tile.png'
import fork from './assets/fork_tile.png'
import grass from './assets/grass_tile.png'
import hay from './assets/hay_tile.png'
import stem from './assets/stem_tile.png'
import wool from './assets/wool_tile.png'
import slots from './assets/slots.png'


function App() {
  return (
    <div className="App">
      {/* <img id='test' src={tiles} style={{

}} /> */}

      <svg className='canvas' width={800} height={600} style={{

      }}>
        <defs>
          <clipPath id="corn">
            <path fill="none" d="M713 713 L713 810 L810 810 L810 713 Z" />
          </clipPath>
          <clipPath id="grass">
            <path fill="none" d="M613 613 L613 719 L710 719 L710 613 Z" />
          </clipPath>
        </defs>
        <g>
          {/* <image x={0} y={0} height={1017} width={1011} style={{
            cursor: 'pointer'
          }} xlinkHref={tiles} clipPath='url(#corn)'
            transform='translate(-700, -700)'
          />

          <image x={0} y={0} height={1017} width={1011} style={{
            cursor: 'pointer'
          }} xlinkHref={tiles} clipPath='url(#grass)'
            transform='rotate(-90 300 300) translate(-500, -500) '
          /> */}
        </g>


        {/* <image xlinkHref={tiles} x="0" y="0" height="150px" width="150px" z={100} /> */}

        <g id="main-container" className='tile-container'>
          
          <image className='tile' xlinkHref={grass} x={125} y={125} height={50} width={50} style={{
            opacity: '50%'
          }} />
          <image className='tile' xlinkHref={bottle} x={100} y={100} height={50} width={50} />
          <image className='tile' xlinkHref={bottle} x={150} y={100} height={50} width={50} />
          <image className='tile' xlinkHref={bottle} x={200} y={100} height={50} width={50} />
          <image className='tile' xlinkHref={hay} x={250} y={100} height={50} width={50} />
          {/* <rect x={100} y='100' rx={5} ry={5} >
            <image xlinkHref={tiles} x="100" y="100" height="150px" width="150px" />
          </rect>
          <rect x={150} y='100' rx={5} ry={5} >

          </rect>
          <rect x={200} y='100' rx={5} ry={5} ></rect>
          <rect x={250} y='100' rx={5} ry={5} ></rect>
          <rect x={200} y='100' rx={5} ry={5} ></rect>
          <rect x={200} y='100' rx={5} ry={5} ></rect>
          <rect x={200} y='100' rx={5} ry={5} ></rect>
          <rect x={200} y='100' rx={5} ry={5} ></rect> */}
        </g>
        <g id='left-container'>

        </g>
        <g id="right-container">
        </g>
        <g>
        <image className='slots' xlinkHref={slots} x={100} y={400} height={75} width={800} />
        </g>
      </svg>
      {/* <div id='image-container' style={{
        height: '1000px',
        backgroundColor: 'red',
        width: '1000px'
      
      }}>

      </div> */}
    </div>
  );
}

export default App;
