import React from 'react';

const isModifiedEvent = (event) =>
!!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

class Link extends React.Component {
  handleClick = (event) => {

    if (this.props.onClick)
      this.props.onClick(event)

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault()

    const pathname = this.props.component === 'Home' ? '/' : `/${this.props.component}`;
    this.props.history.push(pathname)
    }
  };

  render(){
    const { history, component, ...props } = this.props;
    return <a {...props} onClick={this.handleClick}></a>;
  };
};

const myRouter = (pathname) => {
  var page = pathname === '/' ? '/Home' : pathname;
  return page.substr(1);
};

export { Link, myRouter };
