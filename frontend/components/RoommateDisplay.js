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
    img: 'https://avatars2.githubusercontent.com/u/29764755?s=400&v=4',
    title: 'Paul',
    author: 'pashminu',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/897710707164229632/Bk2Xxk0J.jpg',
    title: 'Andrew',
    author: 'Danson67',
  },
  {
    img: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAwaAAAAJGMwOTUyNzRhLTI5NzMtNDI5ZS04ZDEyLTY2M2VmNWFkNWYxYQ.jpg',
    title: 'Luchen',
    author: 'fancycrave1',
  },
  {
    img: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkoAAAAJGVlNjNhNjFlLWVlNWYtNGRiYy1hN2JhLWE5NjA3NTdkNjZiYg.jpg',
    title: 'Pujitha',
    author: 'Hans',
  },
  {
    img: 'https://i2.wp.com/www.usmagazine.com/wp-content/uploads/628353178_emma-stone-zoom-86db3120-8bfa-4084-81a5-3fc660d843ed.jpg?crop=0px%2C80px%2C2000px%2C1124px&resize=1600%2C900&ssl=1',
    title: 'Emma',
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
      {tilesData.map((tile) => (<Link to="/roommateprofile/1">
        <GridTile
          key={tile.img}
          title={tile.title}
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
