import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('footer_banner')}>
                <a
                    href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v5&utm_source=tiktok_webapp_main"
                    className={cx('logo-link')}
                >
                    <img src={images.banner} alt="Tiktok" className={cx('ImgEffectBg')} />
                    <div className={cx('EHEntranceText')}>
                        <div>
                            <h4 className={cx('EHEntranceTextEl')}>Create TikTok effects, get a reward</h4>
                        </div>
                    </div>
                </a>
            </div>
            <div className={cx('footer_link')}>
                <a href="https://www.tiktok.com/about?lang=en">About</a>
                <a href="https://newsroom.tiktok.com/">Newsroom</a>
                <a href="https://www.tiktok.com/about/contact?lang=en">Contact</a>
                <a href="https://careers.tiktok.com/">Careers</a>
            </div>
            <div className={cx('footer_link')}>
                <a href="https://www.tiktok.com/forgood">TikTok for Good</a>
                <a href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web">
                    Advertise
                </a>
                <a href="https://www.tiktok.com/live/creator-networks/en?enter_from=tiktok_official">
                    TikTok LIVE Creator Networks
                </a>
                <a href="https://developers.tiktok.com/?refer=tiktok_web">Developers</a>
                <a href="https://www.tiktok.com/transparency">Transparency</a>
                <a href="https://www.tiktok.com/tiktok-rewards/en">TikTok Rewards</a>
                <a href="https://www.tiktok.com/embed">TikTok Embeds</a>
            </div>
            <div className={cx('footer_link')}>
                <a href="https://support.tiktok.com/en">Help</a>
                <a href="https://www.tiktok.com/safety?lang=en">Safety</a>
                <a href="https://www.tiktok.com/legal/terms-of-service?lang=en">Terms</a>
                <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en">Privacy Policy</a>
                <a href="https://www.tiktok.com/privacy/overview/en?enter_method=webapp_desktop">Privacy Center</a>
                <a href="https://www.tiktok.com/creators/creator-portal/en-us/">Creator Portal</a>
                <a href="https://www.tiktok.com/community-guidelines?lang=en">Community Guidelines</a>
            </div>
            <div className={cx('footer_link')}>
                <a href="/channel/dance">Dance</a>
                <a href="/channel/arts">Arts</a>
                <a href="/channel/food-and-drink">Food and Drink</a>
                <a href="/channel/tourism">Tourism</a>
                <a href="/channel/production-and-manufacturing">Production and Manufacturing</a>
                <a href="/channel/vehicles-and-transportation">Vehicles and Transportation</a>
                <a href="/channel/relationship">Relationship</a>
                <a href="/channel/tiktok-style">TikTok Style</a>
                <a href="/channel/athletics">Athletics</a>
                <a href="/channel/hobbies">Hobbies</a>
            </div>
            {/* <span data-e2e="copyright" class="SpanCopyright">
                © 2024 TikTok
            </span> */}
        </footer>
    );
}

export default Footer;
