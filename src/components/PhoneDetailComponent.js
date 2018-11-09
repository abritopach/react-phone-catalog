import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { unSelectPhoneAction } from '../actions/phonesActions';

const styles = theme => ({
    lead: {
        color: '#ccc'
    },
    card: {
      maxWidth: 600,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    collapse: {
        'margin-bottom': '56px'
    }
  });

// Phone Detail Component.

class PhoneDetailComponent extends Component {

    state = { expanded: false };

    constructor() {
        console.log('PhoneDetailComponent::constructor | method called');
        super();
    }

    componentDidMount() {
        console.log('PhoneDetailComponent::componentDidMount | method called');
        window.onpopstate = () => {
            this.props.dispatch(unSelectPhoneAction());
        }
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };

    render() {
        const { classes, selectedPhone } = this.props;
       
        return (
            <div>
                <h3 className={classes.lead}>Phone Details</h3>
                {selectedPhone ? 
                <Grid container justify = "center">
        
                    <Card className={classes.card}>
                        <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" style={{ backgroundColor: selectedPhone.color }}>
                            C
                            </Avatar>
                        }
                        action={
                            <IconButton>
                            <MoreVertIcon />
                            </IconButton>
                        }
                        title={selectedPhone.title}
                        subheader={selectedPhone.price}
                        />
                        <CardMedia
                        className={classes.media}
                        image={selectedPhone.productImage}
                        title={selectedPhone.title}
                        />
                        <CardContent>
                        <Typography component="p">
                        {selectedPhone.description}
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit className={classes.collapse}>
                        <CardContent>
                            <Typography paragraph>More Details:</Typography>
                            <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit consequat id etiam nibh lobortis torquent, dignissim dis feugiat platea conubia molestie habitant lacus congue magna dui. 
                            </Typography>
                            <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit consequat id etiam nibh lobortis torquent, dignissim dis feugiat platea conubia molestie habitant lacus congue magna dui.
                            Odio torquent penatibus aenean per phasellus metus nam commodo libero dapibus eget mollis quam, viverra venenatis accumsan facilisi rutrum interdum donec rhoncus dictum sagittis
                            suspendisse sem. Viverra vestibulum a dictumst molestie curae eget vitae rutrum ultricies hac, mauris posuere enim facilisis scelerisque nullam interdum neque conubia metus cum,
                            augue morbi ullamcorper feugiat semper cras convallis duis magna.
                            </Typography>
                        </CardContent>
                        </Collapse>
                    </Card>
                </Grid> : 'You have not selected a phone :(....'}
             </div>
        );
    }
}

PhoneDetailComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
      selectedPhone: state.catalog.selectedPhone
    };
};
  
export default connect(mapStateToProps)(withStyles(styles)(PhoneDetailComponent));