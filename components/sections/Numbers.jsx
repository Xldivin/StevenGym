import React from 'react'

function Numbers() {
    return (
        <section>
            <h3 className='text-4xl font-semibold my-7 px-[100px] py-[40px]'>TUM in numbers</h3>
            <div className='flex justify-between'>
                <div className='w-[50rem] bg-sky-700 h-[20rem] ml-[50px] p-[90px] flex flex-col'>
                   <p className='text-8xl text-[#fff] font-bold'>50,000</p> 
                   <p className='text-2xl text-[#fff] font-bold'>Students</p>
                </div>
                <div className='flex flex-col mr-[10rem]'>
                    <div className='max-w-[30rem] bg-amber-400 w-[40em] h-[9rem] p-[20px] flex '>
                        <p className='text-8xl'>176</p>
                        <p className='py-[2rem] px-[3rem] text-1xl font-bold'>ERC Grants for cutting-edge research</p>
                    </div>
                    <div className='max-w-[30rem] bg-red-900 w-[40em] h-[9rem] mt-8 p-[20px] flex '>
                        <p className='text-8xl'>18</p>
                        <p className='py-[2rem] px-[6rem] text-1xl font-bold'>Nobel laureates</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Numbers