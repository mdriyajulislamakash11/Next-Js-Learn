import React from 'react';

const AboutSlagsPages = async ({params}) => {
    const p = await params;
    
    console.log(p);

    return (
        <div>
            <h2 className='font-bold text-2xl'>Abou slags pages</h2>

        </div>
    );
};

export default AboutSlagsPages;