export default function CountryList({ countries }: { countries: [{ name: { common: string } }] }) {
    console.log(countries)
    return <div>
        <div>Country List</div>
        <ul>
            {countries.map((eachCountry: typeof countries[number]) => {
                return <li key={eachCountry.name.common}>{eachCountry.name.common}</li>
            })}
        </ul>
    </div>
}

export async function getStaticProps() {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const countries = await res.json()

    return {
        props: {
            countries,
        },
    }
}