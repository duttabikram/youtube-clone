let total = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const LeftBar = () => {
    return <div className=" mt-4 bg-gray-950 w-48 hidden md:block">
      <BarElement />
      <BarElement />
      <BarElement />
      <Line />
      <BarElement />
      <BarElement />
      <BarElement />
      <BarElement />
      <BarElement />
      <Line />
      <BarElement />
      <BarElement />
      <BarElement />
      <Line />
    </div>
}

export const Line = () => {
    return <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-3 pr-3 opacity-20	">
    <div className="bg-red-600 h-0.5 dark:bg-gray-500" style={{width: "100%"}}></div>
  </div>
}


function BarElement() {
    return <div className="w-90 rounded-xl bg-slate-950 hover:bg-gray-700 flex w-48 p-2 m-2 cursor-pointer">
        <div className="pr-2">
        🏠︎
        </div>
        <div>
            {"home"}
        </div>
    </div>
}