import React, { useEffect, useState } from 'react';

export default function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/haiwaan-93')
            .then(res => res.json())
            .then(userData => {
                console.log(userData);
                setData(userData);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
            Github Followers : {data.followers}
            <br />
            {data.avatar_url && <img src={data.avatar_url} alt="GitHub Avatar" className='mx-auto mt-4 w-32 h-32 rounded-full' />}
        </div>
    );
}
