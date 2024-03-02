import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function Video(data) {
    console.log(data);
    return (
        <div className={cx('video-player')}>
            <video controls loop>
                <source src={data.data.file_url} type="video/mp4" />
            </video>
            <div className={cx('action-wrapper')}>
                <Button className={cx('btn_action-icon')}>
                    <span className={cx('span_icon')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <strong className={cx('strong-text')}>{data.data.likes_count}</strong>
                </Button>
                <Button className={cx('btn_action-icon')}>
                    <span className={cx('span_icon')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <strong className={cx('strong-text')}>{data.data.comments_count}</strong>
                </Button>
                <Button className={cx('btn_action-icon')}>
                    <span className={cx('span_icon')}>
                        <FontAwesomeIcon icon={faBookmark} />
                    </span>
                    <strong className={cx('strong-text')}>0</strong>
                </Button>
                <Button className={cx('btn_action-icon')}>
                    <span className={cx('span_icon')}>
                        <FontAwesomeIcon icon={faShare} />
                    </span>
                    <strong className={cx('strong-text')}>{data.data.shares_count}</strong>
                </Button>
            </div>
        </div>
    );
}

export default Video;
