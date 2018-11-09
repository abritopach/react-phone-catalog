import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';

import { connect } from 'react-redux';
import { selectPhoneAction, loadPhones } from '../actions/phonesActions';

const styles = {
    lead: {
        color: '#ccc'
    },
    card: {
      display: 'flex',
      width: '100%'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '60px',
      height: '80px',
    },
    list: {
        'margin-bottom': '56px'
    }
};


// Phone List Container component.

class PhoneListContainer extends Component {

    state = {
        completed: 0,
    };

    constructor() {
        console.log('PhoneListContainer::constructor | method called');
        super();
    }

    // We want to get phones from the API right after our component renders.
    componentDidMount() {
        console.log('PhoneListContainer::componentDidMount | method called');
        this.timer = setInterval(this.progress, 500);
        this.props.dispatch(loadPhones());
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed !== 100) {
          const diff = Math.random() * 50;
          this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    handleListItemClick(e, phone) {
        // e.preventDefault();
        // console.log('PhoneListContainer::handleClick | method called', phone);
        this.props.dispatch(selectPhoneAction(phone));
        this.props.history.push("/detail")
    }

    render() {
        const { classes, phones } = this.props;
        return (
            <div>
                <h3 className={classes.lead}>Welcome to Phone Catalog App built with React and Redux </h3>
                <LinearProgress variant="determinate" value={this.state.completed} />
                <List className={classes.list}>

                {phones && this.state.completed > 90 ? <div>
                    {phones.map((phone, index) => {
                        return (   
                            <ListItem key={ index } onClick={(e) => this.handleListItemClick(e, phone)}> 
                            <CardMedia className={classes.cover} image={phone.productImage} title={phone.title}/>
                            <ListItemText primary={phone.title} secondary={phone.price} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="ArrowForward">
                                    <ArrowForwardIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                 </div> : 'Loading phones....'}
                 
                 </List>
            </div>
        );
    }
}

PhoneListContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    phones: PropTypes.array,
    selectedPhone: PropTypes.object,
    dispatch: PropTypes.func.isRequired

};


/* Subscribe component to redux store and merge the state into component's props. */
const mapStateToProps = ({ catalog }) => ({
    phones: catalog.phones,
});


/* Connect method from react-router connects the component with redux store. */
export default connect(mapStateToProps)(withStyles(styles)(PhoneListContainer));