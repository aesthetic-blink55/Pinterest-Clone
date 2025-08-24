interface searchprops {
    value: string;
    setValue: any;
}

const Searchbar = ({ value, setValue }: searchprops) => {
    return (
        <div className="ml-20 flex justify-center items-center min-h-[60px]">
            <input type="search" name="Search" id="Search" className="border border-[#00000018] border-solid p-2 w-160 rounded-xl shadow-lg px-5 focus:outline-none focus:shadow-sm transition-all" placeholder="Search Pins" value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
        </div>
    )
}

export default Searchbar