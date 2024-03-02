import Button from '~/components/Button';
import Video from '~/components/Video';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './ContentItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import Tippy from '@tippyjs/react';

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
                                    <Link href="">{data.data.user.nickname}</Link>
                                    <span>{data.data.nickname}</span>
                                </div>
                            </Tippy>
                        </div>
                        <Button className={cx('btn-flow')} outline>
                            Follow
                        </Button>
                        <div className={cx('video-desc')}>
                            <span>{data.data.description}</span>
                            <Link href="">#aaa</Link>
                        </div>
                        <div className={cx('music-tag')}>
                            <Link href="">{data.data.music}</Link>
                        </div>
                    </div>
                    <Video data={data.data} />
                </div>
            </div>
        </div>
    );
}

export default ContenItem;
