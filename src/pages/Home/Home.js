import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import * as homeService from '~/services/homeService';
import { useEffect, useState } from 'react';
import ContentItem from '~/layouts/components/ContentItem';

const cx = classNames.bind(styles);
// const INIT_PAGE = 1;

function Home() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        homeService
            .getVideos({ type: 'for-you', page: 1 })
            .then((data) => {
                setVideos(data.data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <main className={cx('wrapper')}>
            {videos.map((video) => (
                <ContentItem key={video.id} data={video} />
            ))}
        </main>
    );
}

export default Home;
