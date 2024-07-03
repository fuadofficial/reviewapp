import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { UserData } from '../../StaticData/userData';

function Review() {

    const [index, setIndex] = useState(0);
    const { image, name, job, text } = UserData[index];

    const checkNumber = (number) => {
        if (number >= UserData.length) {
            return 0;
        }
        if (number < 0) {
            return UserData.length - 1;
        }
        return number;
    };

    const prevPerson = () => {
        setIndex((index) => {
            const newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const nextPerson = () => {
        setIndex((index) => {
            const newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * UserData.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <article className='review'>
            <div className="img-container">
                <img className='person-img' src={image} alt={name} />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </article>
    );
}

export default Review;
