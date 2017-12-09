import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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


/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const ApartmentDisplay= () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          // title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default ApartmentDisplay;
