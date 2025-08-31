import React from 'react';
import '../styles/QuranVideoGallery/QuranVideoGallery.css';

const QuranVideoGallery = () => {
  const basePath = '/qf'; // Public base path

  const videoSections = [
    {
      title: '🖨️ মুদ্রণ চলাকালীন ভিডিও',
      video: 'print1.mp4',
      path: '/videos/binding/',
    },
    {
      title: '🧵 বাধাই ভিডিও',
      video: 'vid-004.mp4',
      path: '/videos/quran/',
    },
    {
      title: '🧵 বাধাই ভিডিও',
      video: 'vid-003.mp4',
      path: '/videos/quran/',
    },
    {
      title: '🧵 বাধাই ভিডিও',
      video: 'store1.mp4',
      path: '/videos/binding/',
    },
    {
      title: '🧵 বাধাই ভিডিও',
      video: 'vid-006.mp4',
      path: '/videos/quran/',
    },
    {
      title: '📘 কভার প্রিন্ট ভিডিও',
      video: 'vid-011.mp4',
      path: '/videos/quran/',
    },
    {
      title: '🧵 বাধাই ভিডিও',
      video: 'vid-012.mp4',
      path: '/videos/quran/',
    },
    {
      title: '📦 সংরক্ষণ ভিডিও',
      video: 'vid-007.mp4',
      path: '/videos/quran/',
    },
    {
      title: '📦 সংরক্ষণ ভিডিও',
      video: 'vid-008.mp4',
      path: '/videos/quran/',
    },
  ];

  return (
    <main className="vid-gallery-container">
      <h2>🎥 Quran Production & Distribution Video Gallery</h2>
      <p>
        এই ভিডিও গ্যালারিটি Quraner Fariwala-এর পক্ষ থেকে হিফজ শিক্ষার্থীদের জন্য মুদ্রিত ও বিতরণকৃত কোরআন মাজিদের প্রতিটি ধাপের চলমান দৃশ্যপট সংরক্ষণ করে। MJ Ahmad-এর CLI ও নৈতিক দণ্ড প্রতিটি ভিডিওতে দৃশ্যমান।
      </p>

      {videoSections.map((section, index) => (
        <section key={index}>
          <h3>{section.title}</h3>
          <div className="vid-gallery-grid">
            <div className="gallery-item video">
              <video
                src={`${basePath}${section.path}${section.video}`}
                width="100%"
                height="200"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  borderRadius: '8px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </div>
        </section>
      ))}

      <h4>🛡️ MJ-এর বার্তা:</h4>
      <blockquote>
        “এই ভিডিওগুলো শুধু চলমান দৃশ্য নয়—এগুলো একটি জাতির নৈতিক দণ্ড। প্রতিটি ক্লিপ একটি সত্যের স্মারক।”
      </blockquote>
    </main>
  );
};

export default QuranVideoGallery;
