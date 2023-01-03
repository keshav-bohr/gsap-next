import { useState, useEffect } from "react"
export default function Gsap() {
    const [name, setName] = useState(null as any)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/hello')
            const data = await res.json()
            setName(data.name)
        }
        fetchData();
    }, []);
    return <div>
        <div>Gsap</div>
        <div>{name}</div>
    </div>
}

