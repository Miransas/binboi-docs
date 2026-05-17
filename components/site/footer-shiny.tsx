import React from 'react'
import ShinyText from '../ShinyText'

const MiransasFooterShinyText = () => {
    return (
        <div className='w-full flex items-center justify-center py-16'>
            <ShinyText
                text="Miransas"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#10B981"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
                className='text-bold px-4 text-[16rem]'
            />
        </div>
    )
}

export default MiransasFooterShinyText