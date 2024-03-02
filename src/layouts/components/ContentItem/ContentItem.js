import Button from '~/components/Button';
import Video from '~/components/Video';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './ContentItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ContenItem(data) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    console.log(data);
    return (
        <div>
            <div className={cx('account-item')}>
                <Image className={cx('avatar')} src={data.data.user.avatar} alt={data.data.user.nickname} />
                <div className={cx('contents')}>
                    <div className={cx('text-info')}>
                        <div>
                            <Tippy
                                interactive
                                delay={[800, 0]}
                                offset={[-20, 0]}
                                placement="bottom"
                                render={renderPreview}
                            >
                                <div className={cx('auther')}>
                                    <Link to={`/@${data.nickname}`} className={cx('auther-wrapper')}>
                                        <h3 className={cx('h3-auther-title')}>{data.data.user.nickname}</h3>
                                        <h4
                                            className={cx('h4-auther-name')}
                                        >{`${data.data.user.first_name} ${data.data.user.last_name}`}</h4>
                                    </Link>
                                </div>
                            </Tippy>
                        </div>
                        <Button className={cx('btn-flow')} outline>
                            Follow
                        </Button>
                        <div className={cx('video-desc')}>
                            <span>{data.data.description}</span>
                            <Link href="">
                                <strong> #tiktok-ui </strong>
                            </Link>
                        </div>
                        <div className={cx('music-tag')}>
                            {data.data.music && (
                                <h4 className={cx('h4link-music')}>
                                    <Link href="/#">
                                        <FontAwesomeIcon icon={faMusic} />
                                        <div>{data.data.music}</div>
                                    </Link>
                                </h4>
                            )}
                        </div>
                    </div>
                    <Video data={data.data} />
                </div>
            </div>
        </div>
    );
}

export default ContenItem;
