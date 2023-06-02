import type { Templates } from '~/types'

const templates: Templates = {
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
      'background-position': '{PosOne}rem 0, {PosOne}rem 0, 0 0, 0 0',
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
      PosOne: {
        type: 'range',
        value: 2,
        min: 0,
        max: 20,
      },
    },
  },
  plusses: {
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
      'background-position': '0 0, {posOne}px {posTwo}px',
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
      posOne: {
        type: 'range',
        value: 1.5 * 16,
        min: -100,
        max: 100,
      },
      posTwo: {
        type: 'range',
        value: -0.5 * 16,
        min: -100,
        max: 100,
      },
    },
  },
  checkerboard: {
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
    linear-gradient({degOne}deg, {colorOne}, {colorTwo})`,
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
      degOne: {
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
}
export default templates
