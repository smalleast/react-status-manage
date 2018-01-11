import {PureComponent, createElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    statusList: PropTypes.array,
    status: PropTypes.any
  };

  static defaultProps = {
    statusList: []
  };

  /*===properties end===*/
  _bindChildren() {
    const {children, status, statusList} = this.props;
    let childHtml =  children[0];
    children.map((child, index) => {
      if (status === statusList[index]) {
        childHtml = child;
      }
    });
    return childHtml;
  }

  render() {
    const {className, status, statusList, children, ...props} = this.props;
    return (
      <div
        className={classNames('react-status-manage', className)}
        data-status={status}
        {...props}
      >
        {
          this._bindChildren()
        }
      </div>
    );
  }
}
