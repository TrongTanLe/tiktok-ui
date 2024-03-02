import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    FollowingIcon,
    ExploreIcon,
    ProfileIconSidebar,
} from '~/components/Icons';
import * as userService from '~/services/userService';
import config from '~/config';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Footer from '../Footer';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const currentUser = true;

    const [page, setPage] = useState([INIT_PAGE]);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingIcon />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    icon={<ProfileIconSidebar />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            {currentUser ? (
                <>
                    <div className={cx('farm')}>
                        <p className={cx('plogin')}>Log in to follow creators, like videos, and view comments.</p>
                        <Button large outline>
                            Login
                        </Button>
                    </div>
                    <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} onSeeAll={handleSeeAll} />
                </>
            ) : (
                <>
                    <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} onSeeAll={handleSeeAll} />
                    <SuggestedAccounts label="Following accounts" />
                </>
            )}
            <Footer />
        </aside>
    );
}

export default Sidebar;
