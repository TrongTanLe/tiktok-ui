import Button from '~/components/Button';
//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ActionItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ActionItem(className, column = false, dataItem) {
    const classes = cx('wrapper', {
        [className]: className,
        column,
    });
    console.log(dataItem);
    return (
        <div className={classes}>
            <Button className={cx('btn_action-icon')}>
                <span className={cx('span_icon')}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <strong className={cx('strong-text')}>2M</strong>
            </Button>
            <Button className={cx('btn_action-icon')}>
                <span className={cx('span_icon')}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </span>
                <strong className={cx('strong-text')}>2M</strong>
            </Button>
            <Button className={cx('btn_action-icon')}>
                <span className={cx('span_icon')}>
                    <FontAwesomeIcon icon={faBookmark} />
                </span>
                <strong className={cx('strong-text')}>2M</strong>
            </Button>
            <Button className={cx('btn_action-icon')}>
                <span className={cx('span_icon')}>
                    <FontAwesomeIcon icon={faShare} />
                </span>
                <strong className={cx('strong-text')}>2M</strong>
            </Button>
        </div>
    );
}

export default ActionItem;
