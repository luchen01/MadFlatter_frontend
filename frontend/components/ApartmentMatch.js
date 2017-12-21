import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
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

const tilesData = [
  {
    img: 'http://i.dailymail.co.uk/i/pix/2013/07/08/article-2358368-1AB814C2000005DC-885_634x383.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://i.pinimg.com/originals/4d/f5/a4/4df5a45152ffe788358562a039f85a3c.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://i.pinimg.com/originals/2d/b5/ac/2db5ac31c4cea8af9f827e55d52e9164.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://www.amli.com/AMLIContent/Files/apartments/chicago/lofts/amenity-exterior/lofts-amenity-exterior-clubroom3.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://venturebeat.com/wp-content/uploads/2014/06/8266229576_08c99cffd2_b.jpg?fit=578%2C383&strip=all',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://www.rentcafe.com/blog/wp-content/uploads/2016/02/apartments-for-rent-in-san-francisco.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/3089-3/gaia-apartments-building.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://cdngeneral.rentcafe.com/dmslivecafe/3/295836/002.jpg?width=580&height=385&mode=pad&bgcolor=333333&scale=both',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class ApartmentMatch extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.apartmentMatches);
    return(
      <div style={styles.root}>
    <GridList
      cellHeight={180}
      cellWidth={300}
      style={styles.gridList}
    >
      <Subheader>Results</Subheader>
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
