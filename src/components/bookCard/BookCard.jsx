import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";


const BookCard = (props) => (
    <Card key={props.index}>
        <Image src={props.book.image} wrapped ui={false}/>
        <Card.Content>
            <Card.Header>{props.book.title}</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                {props.book.author}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
                22 Friends
            </a>
        </Card.Content>
    </Card>
);

export default BookCard;
