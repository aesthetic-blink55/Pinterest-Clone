import { useState, useMemo } from 'react'
import pindata from '../pins/pins.json'
import Pin from './Pin'
import Searchbar from './Searchbar'

const Pins = () => {
    const [search, setSearch] = useState('')

    const allPins = pindata.data || []

    const filteredPins = useMemo(() => {
        if (!search) return allPins
        return allPins.filter(pin =>
            pin.title?.toLowerCase().includes(search.toLowerCase()) ||
            pin.keywords?.toLowerCase().includes(search.toLowerCase())
        )
    }, [search, allPins])

    return (
        <>
            <Searchbar value={search} setValue={setSearch} />
            <div className="ml-20 px-4 py-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
                {filteredPins.map((pin, index) => (
                    <Pin key={index} data={pin} />
                ))}
            </div>
        </>
    )
}

export default Pins