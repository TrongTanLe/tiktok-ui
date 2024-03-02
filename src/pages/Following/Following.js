import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import * as userService from '~/services/userService';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Following() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 9 })
            .then((data) => {
                setCards(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {cards.map((card) => (
                <div key={card.id} className={cx('user-card')}>
                    <Link href="" className={cx('link-user-card')}>
                        <div className={cx('image-card')}>
                            <Image src={card.popular_video.thumb_url} />
                        </div>
                        <div className={cx('info-card')}>
                            <Image src={card.avatar} />
                            <h3>{`${card.first_name} ${card.last_name}`}</h3>
                            <h4>
                                {card.nickname}{' '}
                                {card.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </h4>
                            <Button primary>Follow</Button>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Following;
