import React, {
  Component
} from 'react';
import Particles from 'react-particles-js';
import particlesParams from '../../assets/js/particles-params.js';

class Background extends Component {
  render() {
      return <div >
        <
        Particles
      style = {
        {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }
      }
      params = {
        particlesParams
      }
      />     {
      this.props.children
    }

    <
    /div>

}
}
export default Background;