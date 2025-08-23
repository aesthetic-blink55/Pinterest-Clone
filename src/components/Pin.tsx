const Pin = ({ data }: { data: any }) => {
    return (
        <div className="break-inside-avoid mb-4 rounded-xl overflow-hidden shadow-md bg-white">
            <img
                src={data.image}
                alt={data.title}
                className="w-full object-cover"
            />
            <div className="p-2">
                <h2 className="text-sm font-semibold">{data.title}</h2>
            </div>
        </div>
    )
}

export default Pin