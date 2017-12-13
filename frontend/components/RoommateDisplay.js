import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-DOM';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
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
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const RoommateDisplay= () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (<Link to="/roommateprofile">
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile></Link>
      ))}
    </GridList>
  </div>
);

export default RoommateDisplay;
