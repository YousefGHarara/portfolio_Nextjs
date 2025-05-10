import React from 'react';

type Params = {
    params: {id: string}
}

const Page = ({params} : Params) => {

    const {id} = params;
    

    return (
        <div>
            Hi, {id}
        </div>
    );
}

export default Page;
