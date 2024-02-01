import { useAppDispatch, useAppSelector } from '../hook/redux';
import { changeDirection } from '../store/actions/particlesActions';
import style from '../styles/Particles.module.scss'

export function Particles() {
    const dispatch = useAppDispatch();
    const particles = useAppSelector(state => state.particles.particles);
    setTimeout(() => dispatch(changeDirection(particles)), 1000)

    return(
        <>
            {particles.length > 1 ? particles.map(e => (
                <div className={style.particle} style={
                    {width: `${e.size}px`, 
                    height: `${e.size}px`, 
                    borderRadius: `${e.size/2}px`,
                    transition: `transform 1s`,
                    transform: `translate(${e.x}px, ${e.y}px)`
                    }}>
                </div>
            )): <div className="1"></div> }
        </>
    )
}