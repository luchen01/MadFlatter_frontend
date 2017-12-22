import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-DOM';
import {connect} from 'react-redux';


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

class ApartmentMatch extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.apartmentMatches);
    return(
      <div>
        <Link to="/browseapartment"><RaisedButton
            primary={true}
            style={{margin: '20px'}}
            icon={<FontIcon className="material-icons"> zoom_in </FontIcon>}
            label = "More apartments"
          /></Link><br/>
      <div style={styles.root}>
    <GridList
      cellHeight={180}
      cellWidth={300}
      style={styles.gridList}
    >
      <Subheader>Matched Apartments</Subheader>
      {(this.props.apartmentMatches) ?
        this.props.apartmentMatches.map((tile) => (<Link to={`/apartment/${tile.id}`}>
          <GridTile
            key={tile.id}
            title={tile.title}
            // subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.picture} />
          </GridTile></Link>
        )) :
        <p>Fill out the Questionnaire to see your matches!</p>
      }

    </GridList>
  </div>
</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return {
    apartmentMatches: state.apartmentMatches,
  };
}

ApartmentMatch = connect(mapStateToProps, mapDispatchToProps)(ApartmentMatch);

export default ApartmentMatch;
