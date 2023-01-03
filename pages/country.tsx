import styles from '../styles/Country.module.scss'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function CountryList({ countries }: { countries: [{ name: string }] }) {
    const list = gsap.utils.toArray(".country_list");
    let newMax = 0;
    function makeItHappen() {
        newMax = newMax < 600 ? newMax + 100 : 100;
        gsap.to(list, {
            duration: 1,
            x: `random(0, ${newMax})`,
            yoyo: true,
            repeat: 1,
            onComplete: makeItHappen
        });
    }

makeItHappen();
    useEffect(() => {
        makeItHappen()
    }, [])
    
    return <div className={styles.country_list_section}>
        <h2>Country List</h2>
        <div className={styles.country_list_wrapper}>
            <ul className='country_list'>
                {countries.map((eachCountry: typeof countries[number]) => {
                    return <li key={eachCountry.name}>{eachCountry.name}</li>
                })}
            </ul>
        </div>
    </div>
}

export async function getStaticProps() {
    const res = await fetch('https://restcountries.com/v2/all?fields=name')
    const countries = await res.json()

    return {
        props: {
            countries,
        },
    }
}