import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    logo: {
      marginLeft: -12,
      marginRight: 20,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
      },
  };

const Header = (props) => (
    <div className={props.classes.root}>
        <AppBar position="static" color="primary">
        <Toolbar>
            { props.selectedPhone ?   
                <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu" onClick={props.history.goBack}>
                    <ArrowBack />
                </IconButton> : null
            }
            <a href="https://www.guidesmiths.com/" target="_blank" rel="noopener noreferrer"><Avatar className={props.classes.logo} alt="GuideSmiths Logo" src="https://images.ctfassets.net/5gv1edeicqfs/48EM0LU3Z6gWkQCcCaeoq2/704ea273b5d50d09ff450a5ceaa74631/guidesmiths-logo.png" /></a>
            <Typography variant="h6" color="inherit" className={props.classes.grow}>
            Frontend Coding Challenge
            </Typography>
        </Toolbar>
        </AppBar>
    </div>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        selectedPhone: state.catalog.selectedPhone
    };
};
  
export default withRouter(connect(mapStateToProps)(withStyles(styles)(Header)));