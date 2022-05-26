import React from 'react'


function RequestQuote() {
  return (
    <div className='w-full flex sm:justify-end'>
      <button className=" flex wrap flex-shrink-0 bg-[#5C20CF] text-sm font-light text-white  py-4 pl-4 pr-8 h-full hover:bg-[#5317C3]" >
      <a className="text-white px-4 py-1  border-[1px] border-white rounded hover:bg-white w-full hover:text-[#5C20CF]">+ Request a Quote</a>
      </button>
    </div>
  )
}

export default RequestQuote