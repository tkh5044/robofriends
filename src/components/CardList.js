import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <Fragment>
            {
                robots.map(({ id, name, email }) => {
                    return (
                        <Card
                            key   = {id}
                            id    = {id}
                            name  = {name}
                            email = {email}
                        />
                    )
                })
            }
        </Fragment>
    );
};

export default CardList;