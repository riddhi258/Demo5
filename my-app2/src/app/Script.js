import React, { useState } from 'react';
import p1 from '../src/p1.png'; // Replace with actual image

const Web = () => {
  // State for managing active tab
  const [activeTab, setActiveTab] = useState('About Me');

  // State for managing the gallery
  const [galleryImages, setGalleryImages] = useState([p1, p1, p1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle tab switching
  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Handle gallery navigation
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle adding a new image (for simplicity, we just re-add p1)
  const addImage = () => {
    setGalleryImages([...galleryImages, p1]);
  };
}
