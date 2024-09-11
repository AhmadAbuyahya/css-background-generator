import type { Templates } from '~/types'

const templates: Templates = {
  plaid: {
    template: {
      'background-image': `linear-gradient(
        transparent 50%,
        #9da8e150 50%
      ),
      linear-gradient({angleOne}deg, {colorOne} 50%, {colorTwo} 50%)`,
      'background-size': '{sizeX}rem {sizeY}rem',
    },
    variables: {
      colorOne: {
        type: 'color',
        value: '#324171',
      },
      colorTwo: {
        type: 'color',
        value: '#101423',
      },
      angleOne: {
        type: 'range',
        value: 90,
        min: 0,
        max: 360,
      },
      sizeX: {
        type: 'range',
        value: 4,
        min: 3,
        max: 20,
      },
      sizeY: {
        type: 'range',
        value: 4,
        min: 3,
        max: 20,
      },
    },
  },
  triangles: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `conic-gradient(
          from {angleOne}deg at 50% 60%,
          {colorOne} {angleFour}deg,
          transparent {angleFour}deg
        ),
        conic-gradient(from {angleTwo}deg at 50% 30%, {colorTwo} {angleThree}deg, transparent {angleThree}deg)`,
      'background-size': '{sizeX}rem {sizeY}rem',
      'background-position': '0 0, {positionOne}px {positionTwo}px',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#313466',
      },
      colorOne: {
        type: 'color',
        value: '#11ffbb',
      },
      colorTwo: {
        type: 'color',
        value: '#5255bb',
      },
      angleOne: {
        type: 'range',
        value: 330,
        min: 1,
        max: 360,
      },
      angleTwo: {
        type: 'range',
        value: 150,
        min: 1,
        max: 360,
      },
      angleThree: {
        type: 'range',
        value: 60,
        min: 1,
        max: 360,
      },
      angleFour: {
        type: 'range',
        value: 60,
        min: 1,
        max: 360,
      },
      sizeX: {
        type: 'range',
        value: 3,
        min: 3,
        max: 20,
      },
      sizeY: {
        type: 'range',
        value: 3,
        min: 3,
        max: 20,
      },
      positionOne: {
        type: 'range',
        value: 1.5 * 16,
        min: -100,
        max: 100,
      },
      positionTwo: {
        type: 'range',
        value: -0.5 * 16,
        min: -100,
        max: 100,
      },
    },
  },
  zigzag: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `linear-gradient(
          -45deg,
          transparent 75%,
          {colorOne} 75%
        ),
        linear-gradient(45deg, transparent 75%, {colorOne} 75%),
        linear-gradient(-135deg, transparent 75%, {colorOne} 75%),
        linear-gradient(135deg, transparent 75%, {colorOne} 75%)`,
      'background-size': '{sizeX}rem {sizeY}rem',
      'background-position': '{PositionOne}rem 0, {PositionOne}rem 0, 0 0, 0 0',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#101423',
      },
      colorOne: {
        type: 'color',
        value: '#9da8e1',
      },
      sizeX: {
        type: 'range',
        value: 10,
        min: 3,
        max: 20,
      },
      sizeY: {
        type: 'range',
        value: 10,
        min: 3,
        max: 20,
      },
      PositionOne: {
        type: 'range',
        value: 2,
        min: 0,
        max: 20,
      },
    },
  },
  plus: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `radial-gradient(circle, transparent {sizeOne}px, {bgColor} {sizeOne}px),
        linear-gradient({colorOne} .5rem, transparent .5rem),
        linear-gradient(90deg, {colorOne} 8px, transparent 8px)`,
      'background-size': '5rem 5rem',
      'background-position': '5.25rem 5.25rem, 2.5rem 2.5rem, 2.5rem 2.5rem',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#212223',
      },
      colorOne: {
        type: 'color',
        value: '#008080',
      },
      sizeOne: {
        type: 'range',
        value: 1 * 16,
        min: 5,
        max: 40,
      },
    },
  },
  waves: {
    template: {
      'background-color': '#232221',
      'background-image': `radial-gradient(
      circle at 100% 50%,
      transparent 1rem,
      {colorThree} 1rem,
      {colorThree} 1.5rem,
      transparent 1.5rem
    ),
    radial-gradient(
      circle at 0% 50%,
      transparent 1rem,
      {colorThree} 1rem,
      {colorThree} 1.5rem,
      transparent 1.5rem
    ),
    linear-gradient({angleOne}deg, {colorOne}, {colorTwo})`,
      'background-size': '{sizeOne}rem {sizeTwo}rem, {sizeOne}rem {sizeTwo}rem, 100% 100%',
      'background-position': '0 0, 0 2.5rem',
    },
    variables: {
      colorOne: {
        value: '#ff0000',
        type: 'color',
      },
      colorTwo: {
        value: '#0000ff',
        type: 'color',
      },
      colorThree: {
        value: '#ffffff',
        type: 'color',
      },
      angleOne: {
        value: -45,
        type: 'range',
        min: 0,
        max: 360,
      },
      sizeOne: {
        value: 12,
        type: 'range',
        min: 1,
        max: 20,
      },
      sizeTwo: {
        value: 5,
        type: 'range',
        min: 1,
        max: 20,
      },

    },
  },
  brickWall: {
    template: {
      'background': 'conic-gradient(at {width}% {height}%,#0000 75%,{colorOne} 0),conic-gradient(at {width}% {height}%,#0000 75%,{colorOne} 0) {scale}px {scale}px {colorTwo}',
      'background-size': 'calc(2*{scale}px) calc(2*{scale}px)',
    },
    variables: {
      colorOne: {
        value: '#6b698f',
        type: 'color',
      },
      colorTwo: {
        value: '#2b2a33',
        type: 'color',
      },
      scale: {
        value: 50,
        type: 'range',
        min: 1,
        max: 50,
      },
      width: {
        value: 90,
        type: 'range',
        min: 1,
        max: 100,
      },
      height: {
        value: 40,
        type: 'range',
        min: 1,
        max: 100,
      },
    },
  },
  hexagons: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `linear-gradient(30deg, {colorOne} 12%, transparent 12.5%, transparent 87%, {colorOne} 87.5%, {colorOne}),
        linear-gradient(150deg, {colorOne} 12%, transparent 12.5%, transparent 87%, {colorOne} 87.5%, {colorOne}),
        linear-gradient(30deg, {colorOne} 12%, transparent 12.5%, transparent 87%, {colorOne} 87.5%, {colorOne}),
        linear-gradient(150deg, {colorOne} 12%, transparent 12.5%, transparent 87%, {colorOne} 87.5%, {colorOne}),
        linear-gradient(60deg, {colorTwo} 25%, transparent 25.5%, transparent 75%, {colorTwo} 75%, {colorTwo}),
        linear-gradient(60deg, {colorTwo} 25%, transparent 25.5%, transparent 75%, {colorTwo} 75%, {colorTwo})`,
      'background-size': '{sizeX}rem {sizeY}rem',
      'background-position': '0 0, 0 0, {offsetX}rem {offsetY}rem, {offsetX}rem {offsetY}rem, 0 0, {offsetX}rem {offsetY}rem',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#ffffff',
      },
      colorOne: {
        type: 'color',
        value: '#dddddd',
      },
      colorTwo: {
        type: 'color',
        value: '#999999',
      },
      sizeX: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
      sizeY: {
        type: 'range',
        value: 35,
        min: 17,
        max: 87,
      },
      offsetX: {
        type: 'range',
        value: 10,
        min: 5,
        max: 25,
      },
      offsetY: {
        type: 'range',
        value: 17.5,
        min: 8,
        max: 44,
      },
    },
  },
  polkaDots: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `radial-gradient({colorOne} {sizeOne}px, transparent {sizeOne}px),
        radial-gradient({colorTwo} {sizeTwo}px, transparent {sizeTwo}px)`,
      'background-size': '{spacingX}px {spacingY}px',
      'background-position': '0 0, {offsetX}px {offsetY}px',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#ffffff',
      },
      colorOne: {
        type: 'color',
        value: '#ff9999',
      },
      colorTwo: {
        type: 'color',
        value: '#99ff99',
      },
      sizeOne: {
        type: 'range',
        value: 3,
        min: 1,
        max: 10,
      },
      sizeTwo: {
        type: 'range',
        value: 2,
        min: 1,
        max: 10,
      },
      spacingX: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
      spacingY: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
      offsetX: {
        type: 'range',
        value: 10,
        min: 5,
        max: 25,
      },
      offsetY: {
        type: 'range',
        value: 10,
        min: 5,
        max: 25,
      },
    },
  },
  stripes: {
    template: {
      'background': 'linear-gradient({angle}deg, {colorOne} {widthOne}%, {colorTwo} {widthOne}%, {colorTwo} {widthTwo}%, {colorThree} {widthTwo}%)',
      'background-size': '{size}px {size}px',
    },
    variables: {
      colorOne: {
        type: 'color',
        value: '#ff6b6b',
      },
      colorTwo: {
        type: 'color',
        value: '#4ecdc4',
      },
      colorThree: {
        type: 'color',
        value: '#45b7d1',
      },
      angle: {
        type: 'range',
        value: 45,
        min: 0,
        max: 360,
      },
      widthOne: {
        type: 'range',
        value: 25,
        min: 1,
        max: 50,
      },
      widthTwo: {
        type: 'range',
        value: 50,
        min: 1,
        max: 100,
      },
      size: {
        type: 'range',
        value: 60,
        min: 20,
        max: 200,
      },
    },
  },
  tartan: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `repeating-linear-gradient({angle}deg, transparent, transparent {size}px, {colorOne} {size}px, {colorOne} 55px),
        repeating-linear-gradient({perpAngle}deg, transparent, transparent {size}px, {colorTwo} {size}px, {colorTwo} 55px)`,
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#2c3e50',
      },
      colorOne: {
        type: 'color',
        value: '#e74c3c',
      },
      colorTwo: {
        type: 'color',
        value: '#3498db',
      },
      angle: {
        type: 'range',
        value: 0,
        min: 0,
        max: 360,
      },
      perpAngle: {
        type: 'range',
        value: 90,
        min: 0,
        max: 360,
      },
      size: {
        type: 'range',
        value: 50,
        min: 1,
        max: 50,
      },
    },
  },
  circuitBoard: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `
        linear-gradient({angleOne}deg, {colorOne} {sizeOne}px, transparent {sizeOne}px),
        linear-gradient({angleTwo}deg, {colorOne} {sizeOne}px, transparent {sizeOne}px),
        linear-gradient({colorTwo} {sizeTwo}px, transparent {sizeTwo}px),
        linear-gradient(90deg, {colorTwo} {sizeTwo}px, transparent {sizeTwo}px)`,
      'background-size': '{spacingX}px {spacingY}px',
      'background-position': '0 0, 0 0, -{offsetX}px -{offsetY}px, -{offsetX}px -{offsetY}px',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#1a1a1a',
      },
      colorOne: {
        type: 'color',
        value: '#4CAF50',
      },
      colorTwo: {
        type: 'color',
        value: '#2196F3',
      },
      angleOne: {
        type: 'range',
        value: 0,
        min: 0,
        max: 360,
      },
      angleTwo: {
        type: 'range',
        value: 90,
        min: 0,
        max: 360,
      },
      sizeOne: {
        type: 'range',
        value: 2,
        min: 1,
        max: 10,
      },
      sizeTwo: {
        type: 'range',
        value: 1,
        min: 1,
        max: 10,
      },
      spacingX: {
        type: 'range',
        value: 40,
        min: 20,
        max: 100,
      },
      spacingY: {
        type: 'range',
        value: 40,
        min: 20,
        max: 100,
      },
      offsetX: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
      offsetY: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
    },
  },
  basketWeave: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `
        linear-gradient({colorOne} {sizeOne}px, transparent {sizeOne}px),
        linear-gradient(90deg, {colorOne} {sizeOne}px, transparent {sizeOne}px),
        linear-gradient({colorTwo} {sizeTwo}px, transparent {sizeTwo}px),
        linear-gradient(90deg, {colorTwo} {sizeTwo}px, transparent {sizeTwo}px)`,
      'background-size': '{spacingX}px {spacingY}px, {spacingX}px {spacingY}px, {spacingLargeX}px {spacingLargeY}px, {spacingLargeX}px {spacingLargeY}px',
      'background-position': '0 0, 0 0, {offsetX}px {offsetY}px, {offsetX}px {offsetY}px',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#f1e3d3',
      },
      colorOne: {
        type: 'color',
        value: '#d7b899',
      },
      colorTwo: {
        type: 'color',
        value: '#c49a6c',
      },
      sizeOne: {
        type: 'range',
        value: 2,
        min: 1,
        max: 10,
      },
      sizeTwo: {
        type: 'range',
        value: 4,
        min: 1,
        max: 10,
      },
      spacingX: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
      spacingY: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
      spacingLargeX: {
        type: 'range',
        value: 40,
        min: 20,
        max: 100,
      },
      spacingLargeY: {
        type: 'range',
        value: 40,
        min: 20,
        max: 100,
      },
      offsetX: {
        type: 'range',
        value: 10,
        min: 5,
        max: 25,
      },
      offsetY: {
        type: 'range',
        value: 10,
        min: 5,
        max: 25,
      },
    },
  },
  chevron: {
    template: {
      'background-color': '{bgColor}',
      'background-image': `
        linear-gradient({angleOne}deg, {colorOne} 25%, transparent 25%),
        linear-gradient({angleTwo}deg, {colorOne} 25%, transparent 25%)`,
      'background-size': '{sizeX}px {sizeY}px',
      'background-position': '0 0, 0 {offsetY}px',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#f0f0f0',
      },
      colorOne: {
        type: 'color',
        value: '#d9d9d9',
      },
      angleOne: {
        type: 'range',
        value: 45,
        min: 0,
        max: 360,
      },
      angleTwo: {
        type: 'range',
        value: -45,
        min: -360,
        max: 0,
      },
      sizeX: {
        type: 'range',
        value: 60,
        min: 20,
        max: 200,
      },
      sizeY: {
        type: 'range',
        value: 60,
        min: 20,
        max: 200,
      },
      offsetY: {
        type: 'range',
        value: 30,
        min: 10,
        max: 100,
      },
    },
  },
  carbonFiber: {
    template: {
      'background':
        `radial-gradient(circle at 50% 50%, {colorTwo} 25%, {colorOne} 25%, {colorOne} 30%, transparent 30%, transparent),
        radial-gradient(circle at 0% 50%, {colorTwo} 25%, {colorOne} 25%, {colorOne} 30%, transparent 30%, transparent),
        radial-gradient(circle at 100% 50%, {colorTwo} 25%, {colorOne} 25%, {colorOne} 30%, transparent 30%, transparent)`,
      'background-size': '{sizeX}px {sizeY}px',
      'background-color': '{bgColor}',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#2c3e50',
      },
      colorOne: {
        type: 'color',
        value: '#34495e',
      },
      colorTwo: {
        type: 'color',
        value: '#2c3e50',
      },
      sizeX: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
      sizeY: {
        type: 'range',
        value: 20,
        min: 10,
        max: 50,
      },
    },
  },
  moroccanTiles: {
    template: {
      'background': `
        radial-gradient(circle at 0 0, {colorOne} {size}px, transparent {size}px) 0 0,
        radial-gradient(circle at 100% 0, {colorOne} {size}px, transparent {size}px) {tileSize}px 0,
        radial-gradient(circle at 100% 100%, {colorOne} {size}px, transparent {size}px) {tileSize}px {tileSize}px,
        radial-gradient(circle at 0 100%, {colorOne} {size}px, transparent {size}px) 0 {tileSize}px,
        {bgColor}`,
      'background-size': 'calc(2 * {tileSize}px) calc(2 * {tileSize}px)',
    },
    variables: {
      bgColor: {
        type: 'color',
        value: '#f1f1f1',
      },
      colorOne: {
        type: 'color',
        value: '#000',
      },
      size: {
        type: 'range',
        value: 20,
        min: 5,
        max: 50,
      },
      tileSize: {
        type: 'range',
        value: 70,
        min: 20,
        max: 100,
      },
    },
  },

}
export default templates
