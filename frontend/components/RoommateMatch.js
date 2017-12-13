import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-DOM';

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
    img: 'http://static.tvtropes.org/pmwiki/pub/images/ryangosling.jpg',
    title: 'Ryan',
    author: 'jill111',
  },
  {
    img: 'https://memegenerator.net/img/instances/400x/62828265/i-dont-know-all-the-words.jpg',
    title: 'Rachel',
    author: 'pashminu',
  },
  {
    img: 'http://preen.inquirer.net/files/2017/02/monica-friends-decluttering-meme-e1485937514859.jpg',
    title: 'Monica',
    author: 'Danson67',
  },
  {
    img: 'http://blog.suitey.com/wp-content/uploads/2014/09/fchan.jpg',
    title: 'Chandler',
    author: 'fancycrave1',
  },
  {
    img: 'http://s2.quickmeme.com/img/ff/ff653922c654f058c07d26c4fd5eaabd25c2fe6ad0f9c95446b6a366708c1e30.jpg',
    title: 'Joey',
    author: 'Hans',
  },
  {
    img: 'https://i.pinimg.com/736x/86/0f/47/860f4753a002cdc92f7a9f31a7431735--its-a-boy-baby-names.jpg',
    title: 'Phoebe',
    author: 'fancycravel',
  },
  {
    img: 'https://qph.ec.quoracdn.net/main-qimg-8328906c4dbb2bd99e1552b12e948ad9',
    title: 'Janice',
    author: 'jill111',
  },
  {
    img: 'https://i.imgflip.com/51kdr.jpg',
    title: 'Minions',
    author: 'BkrmadtyaKarki',
  },
];

class RoommateMatch extends React.Component{
  render() {
    return(
      <div style={styles.root}>
    <GridList
      cellHeight={180}
      cellWidth={300}
      style={styles.gridList}
    >
      <Subheader>Saved Results</Subheader>
      {tilesData.map((tile) => ( <Link to="/profile">
        <GridTile
          key={tile.img}
          // title={tile.title}
          // subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile></Link>
      ))}
    </GridList>
  </div>
    )
  }
}

export default RoommateMatch;
