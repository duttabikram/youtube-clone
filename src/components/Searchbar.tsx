
export const SearchBar = () => {
    return <div className="w-3/4">
        
            <div className="w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
                <input  id="default-search" className="w-full bg-slate-950 text-white border-none outline-none" placeholder="Search" required />
                <button className="bg-slate-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
                <button className="bg-gray-800 p-2 rounded-full">
  <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      className="w-6 h-6 text-white">
    <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" />
    <path d="M19 12a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V21a1 1 0 1 0 2 0v-2.08A7 7 0 0 0 19 12z" />
  </svg>
</button>

                
            </div>

            
       
    </div> 
    

}