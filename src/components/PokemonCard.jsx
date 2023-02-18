import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/es/card/Meta';

import React from 'react';
import StarButton from './StarButton';
import { setFavorite } from '../slices/dataSlice';
import './PokemonList.css'

const PokemonCard = ({name,image,skills,id,favorite}) => {
    const dispatch = useDispatch()
    const array = []
    skills.map( element => {
        array.push(element.ability.name)
    } )
    
    const handleOnFavorite = ()=>{
        dispatch(setFavorite({ pokemon: id }))
    }
    return (
        <Card
            title={name}
            cover={
                <img 
                    src={image} 
                    alt={name} 

                />}
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
        >
            <Meta description={array.join(', ')} />
        </Card>
    );
}

export default PokemonCard;
