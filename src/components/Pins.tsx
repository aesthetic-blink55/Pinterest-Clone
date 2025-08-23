import { useEffect, useState } from 'react'
import pindata from '../pins/pins.json'
import Pin from './Pin'

const Pins = () => {
    const [pins, setPins] = useState<any[]>(pindata.data || [])

    useEffect(() => setPins(pindata.data), [pindata])

    return (
        <div className="ml-20 px-4 py-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
            {pins.map((pin, index) => (
                <Pin key={index} data={pin} />
            ))}
        </div>
    )
}

export default Pins