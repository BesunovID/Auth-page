import { AppDispatch } from ".."
import { ParticlesDots } from "../../models/models"
import {particlesSlice} from "../slices/particlesSlice"


export const changeDirection = (particlesDots: ParticlesDots[]) => {
    return (dispatch: AppDispatch) => {
        const newParticlesDots = particlesDots.map(e => (
            operation(e)
        ));
        dispatch(particlesSlice.actions.setMove({particles: newParticlesDots}))   
    }
}

const operation = (particleDots: ParticlesDots) => {
    const distance: number = 150;
    const step: number = 10;

    let interimShift = {
        deg: particleDots.deg, 
        x: particleDots.x, 
        y: particleDots.y
    };

    interimShift = changeShift(interimShift.deg, interimShift.x, interimShift.y, step);

    while (Math.abs(particleDots.x + interimShift.x) >= distance || 
    Math.abs(particleDots.y + interimShift.y) >= distance) {
        interimShift = changeShift(interimShift.deg, interimShift.x, interimShift.y, step)
    }
    const newParticle: ParticlesDots = {
        size: particleDots.size,
        x: particleDots.x + interimShift.x,
        y: particleDots.y + interimShift.y,
        deg: interimShift.deg
    } 
    return(newParticle)
}

const changeShift = (deg: number, x: number, y: number, step: number) => {
    const maxRotate: number = 55;
    return(
        {
        deg: deg + (+(Math.random() * maxRotate * 2 - maxRotate).toFixed()),
        x: shiftDots(deg + (+(Math.random() * maxRotate * 2 - maxRotate).toFixed()), step).x,
        y: shiftDots(deg + (+(Math.random() * maxRotate * 2 - maxRotate).toFixed()), step).y,
        }
    ) 
}

const shiftDots = (deg: number, step: number) => {
    return{
        x: +(Math.cos(deg * Math.PI / 180) * step).toFixed(),
        y: +(Math.sin(deg * Math.PI / 180) * step).toFixed(),
    }
}