import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-DOM';
import {connect} from 'react-redux';
import {saveMatches} from '../actions/index';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: 450,
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    overflowY: 'auto',
  },
};

class RoommateMatch extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Link to="/browseroommate"><RaisedButton
            primary={true}
            style={{margin: '20px'}}
            icon={<FontIcon className="material-icons"> zoom_in </FontIcon>}
            label = "More roommates"
          /></Link><br/>
      <div style={styles.root}>
    <GridList
      cellHeight={180}
      cellWidth={300}
      style={styles.gridList}
    >
      <Subheader>Matched Roommates</Subheader>
      {this.props.matches.map(match => {
        let r = 255 * (1 - match.score);
        let g = 255 * match.score;
        return (
          <Link to={`/roommateprofile/${match.user.id}`}>
          <GridTile
            title={match.user.firstname}
            style={{backgroundColor: `rgb(${parseInt(r)}, ${parseInt(g)}, 0)`}}
            subtitle={<span>Compatability score: <b>{(match.score * 100).toFixed(2)}%</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
          </GridTile></Link>
        );
      })}
    </GridList>
  </div>
</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toSaveMatches: (matches) => dispatch(saveMatches(matches))
    }
}

const mapStateToProps = (state) => {
    return {
        matches: state.matches
    };
};

RoommateMatch = connect(mapStateToProps, mapDispatchToProps)(RoommateMatch);

export default RoommateMatch;
