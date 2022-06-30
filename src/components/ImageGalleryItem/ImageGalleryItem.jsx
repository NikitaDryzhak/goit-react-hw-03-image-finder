import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, openModal }) => {
  return (
    <li className={s.galleryItem} key={id}>
      <img
        src={webformatURL}
        srcSet={largeImageURL}
        alt="picName"
        className={s.galleryImg}
        onClick={openModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
