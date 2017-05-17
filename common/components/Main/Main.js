import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import HeaderContainer from '../../containers/HeaderContainer';
import NavBarContainer from '../../containers/NavBarContainer';
import FooterContainer from '../../containers/FooterContainer';
import ModalNormalContainer from '../../containers/ModalNormalContainer';
import actions from '../../actions'

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        const {children, ...props} = this.props

        return (
          <div className="app">
            <HeaderContainer />
            <div className="app-body">
              <div className="container-fluid">
                {this.props.children}
              </div>
            </div>
            <FooterContainer />
            <ModalNormalContainer />
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
  return {};
    //return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
