import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setFlats } from '../actions';
import Flat from '../containers/Flat';

class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="ui cards flat-list col-sm-7">
        {this.props.flats.map(flat => (
          <Flat flat={flat} key={flat.name} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats: setFlats }, dispatch);
};

const mapStateToProps = state => {
  return {
    flats: state.flats,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
