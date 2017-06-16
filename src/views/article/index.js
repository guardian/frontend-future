// @flow

import styles from './styles.scss';

export default props =>
    <header style={styles['.header']}>
        <div style={styles['.content-labels']}>
            <a
                style={styles['.section-label']}
                data-link-name="article section"
                href="https://m.code.dev-theguardian.com/uk/ruralaffairs"
                onclick={}>
                Rural affairs
            </a>
            <a
                style={styles['.series-label']}
                href="https://m.code.dev-theguardian.com/environment/series/country-diary">
                Country diary
            </a>
        </div>
        <h1 style={styles['.headline']} itemProp="headline">
            Revitalised and calmed by an English wood in spring
        </h1>
    </header>;
