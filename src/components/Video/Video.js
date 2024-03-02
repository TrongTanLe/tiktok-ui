import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import ActionItem from '~/layouts/components/ActionItem';

const cx = classNames.bind(styles);

function Video(data = []) {
    return (
        <div className={cx('video-player')}>
            <video controls loop>
                <source src={data.data.file_url} type="video/mp4" />
            </video>
            <ActionItem column dataItem={data} />
        </div>
    );
}

export default Video;
