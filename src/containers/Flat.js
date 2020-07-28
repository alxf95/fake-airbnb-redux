import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    let classes = 'header';
    if (this.props.flat === this.props.selectedFlat) {
      classes += ' selected';
    }

    return (
      <div className="ui card flat">
        <div className="image" onClick={this.handleClick}>
          <img src={this.props.flat.imageUrl} alt={this.props.flat.name} />
        </div>
        <div className="content">
          <a className={classes} onClick={this.handleClick} href="/">
            {this.props.flat.name}
          </a>
          <div className="description">
            {this.props.flat.price} {this.props.flat.priceCurrency}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectFlat: selectFlat }, dispatch);
};

const mapStateToProps = state => {
  return {
    selectedFlat: state.selectedFlat,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
