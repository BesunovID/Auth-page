import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ParticlesDots } from "../../models/models"

interface ParticlesMovePayload {
    particles: ParticlesDots[]
}

interface ParticlesSlice {
    particles: ParticlesDots[]
}

const initialState: ParticlesSlice = {
    particles: [...Array<ParticlesDots>(20)].map(e => (
        {
        size: Math.round(Math.random()*10) + 5,
        x: Math.round(Math.random()*100) + 20,
        y: Math.round(Math.random()*100) + 20,
        deg: +(Math.random() * 360).toFixed()
        }
    ))
}

export const particlesSlice = createSlice({
    name: 'particles',
    initialState,
    reducers: {
        setMove(state, action: PayloadAction<ParticlesMovePayload>) {
            state.particles = action.payload.particles
        }
    }
})

export default particlesSlice.reducer