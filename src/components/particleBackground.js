import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./config/particle-config";

function ParticleBackground() {
    return (
        <Particles className="particles" params={ParticleConfig}></Particles>
    )
};

export default ParticleBackground;