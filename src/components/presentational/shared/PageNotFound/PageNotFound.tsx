import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './PageNotFound.module.scss';

const PageNotFound: FunctionComponent = () => (
  <div className={ styles.pageNotFound }>
    <FormattedMessage id="page.notFound" />
  </div>
);

export default PageNotFound;
