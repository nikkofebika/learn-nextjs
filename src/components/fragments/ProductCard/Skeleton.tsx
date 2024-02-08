const Item = () => (
    <div className="space-y-2 animate-pulse">
        <div className="space-y-2">
            <div className=" bg-slate-700 h-[200px] w-full rounded"></div>
            <div className="h-5 bg-slate-700 rounded"></div>
            <div className="h-5 bg-slate-700 rounded"></div>
            <div className="h-5 bg-slate-700 rounded"></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
            <div className="h-9 bg-slate-700 rounded" />
            <div className="h-9 bg-slate-700 rounded" />
        </div>
    </div>
)

const Skeleton = () => {
    const items = [];
    for (let index = 0; index < 8; index++) {
        items.push(<Item key={index} />);
    }

    return (
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 ">
            {items}
        </div>
    )
}

export default Skeleton;