import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import {config} from './particle.config.js';
import './particle.style.css';

function Particle() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

return (
    <Particles 
        className={'particle'}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
        
    />
);
};


export default Particle