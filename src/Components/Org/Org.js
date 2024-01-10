import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrgCard from './OrgCard';
import '../Events/Events.css'

const Org = () => {

    const orgs = useLoaderData()
    return (
        <div className='events w-75 mx-auto'>
            {
                orgs.map(org => <OrgCard
                    key={org.id}
                    org={org}
                ></OrgCard>)
            }
        </div>
    );
};

export default Org;