import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Orgcard.css'

const OrgCard = ({org}) => {
    const { id, name, category, bio, profilepic } = org;
    return (
        <CardGroup>
            <Card className='event border shadow-sm'>
                <Card.Body className='cardHeader p-2 '>
                    <Card.Img src={profilepic} />
                    <Card.Title>{name}</Card.Title>
                </Card.Body>

                <Card.Text className='p-3'>
                    <small className='bio'>{bio}</small> <br/><br/><br/>
                    <small>Category: {category}</small>
                </Card.Text>

                <Card.Footer>
                    <div className='px-auto d-flex justify-content-between'>
                        <Link to={`/donate/${id}`}>
                            <button className='btn btn-dark me-3 px-5'>Donate </button>
                        </Link>
                        <Link to={`/orgs/${id}`}>
                            <button className='btn btn-outline-dark px-5'>Details </button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default OrgCard;