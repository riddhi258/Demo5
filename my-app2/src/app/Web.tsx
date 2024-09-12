"use client";

import React, { useState } from 'react';
import p1 from '../p1.png'; 

const Web = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  // State for managing the gallery
  const [galleryImages, setGalleryImages] = useState([p1, p1, p1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle tab switching
  const switchTab = (tabName: React.SetStateAction<string>) => {
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

  return (
    <>
      <div className="container">
        {/* Nav bar */}
        <div className="nav-bar">
          <div className={`nav-item ${activeTab === 'About Me' ? 'active' : ''}`} onClick={() => switchTab('About Me')}>
            <p>About Me</p>
          </div>
          <div className={`nav-item ${activeTab === 'Experiences' ? 'active' : ''}`} onClick={() => switchTab('Experiences')}>
            <p>Experiences</p>
          </div>
          <div className={`nav-item ${activeTab === 'Recommended' ? 'active' : ''}`} onClick={() => switchTab('Recommended')}>
            <p>Recommended</p>
          </div>
        </div>

        {/* Conditional content rendering based on active tab */}
        <div className="main-content">
          {activeTab === 'About Me' && (
            <div>
              <p>Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
              <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...</p>
            </div>
          )}
          {activeTab === 'Experiences' && <p>Experiences section content...</p>}
          {activeTab === 'Recommended' && <p>Recommended section content...</p>}
        </div>

        {/* Gallery section */}
        <div className="gallery">
          <div className="gallery-header">
            <p>Gallery</p>
            <button className="add-image-btn" onClick={addImage}>+ ADD IMAGE</button>
          </div>
          <div className="gallery-content">
            <button className="gallery-btn prev-btn" onClick={goPrev}>←</button>
            <div className="gallery-items">
              <img src={'galleryImages[currentIndex]'} alt={`Gallery Image ${currentIndex + 1}`} />
            </div>
            <button className="gallery-btn next-btn" onClick={goNext}>→</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;

