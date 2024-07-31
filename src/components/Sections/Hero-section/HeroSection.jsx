
import { useEffect } from 'react';
import Typewriter from '../../Typewriter';
import styles from './HeroSection.module.css'
import Aos from 'aos';

function HeroSection() {
    useEffect(()=>{
        Aos.init();
        Aos.refresh();
    },[])
    return (
        <section className={styles.container}>
            <aside className={styles.left_side}>
                <p data-aos="fade-in" data-aos-duration="1000">H<Typewriter text="icham hanane" delay={150} /></p>
                <h1  data-aos="fade-right" data-aos-duration="2000">Full stack developer</h1>
                <div className={styles.buttons} data-aos="fade-in" data-aos-duration="2000">
                    <button>let's talk</button>
                    <button>My Resume</button>
                </div>
            </aside>
            <aside className={styles.right_side} data-aos="fade-in" data-aos-duration="2000">
                <div className={styles.image_container}>

                </div>
                <div className={styles.image}>
                    
                </div>
            </aside>
        </section>
    ) 
}
export default HeroSection;