import React from 'react';
import '../styles/QuranGallery/QuranGallery.css'; // Reuse styling

const QuranPagesPreview = () => {
  const basePath = '/qf/public/quran-pages'; // Public base path

  const paras = [
    {
      title: '১ম পাড়া — আলিফ লাম মীম',
      folder: 'Para01',
      totalPages: 22,
    },
    {
      title: '২য় পাড়া — সায়াকুল',
      folder: 'Para02',
      totalPages: 20,
    },
  ];

  return (
    <main className="gallery-container">
      <h2>📖 কোরআনের ভিতরের পৃষ্ঠা — পাড়া ভিত্তিক প্রিভিউ</h2>
      <p>
        এই পেইজে MJ Ahmad-এর CLI দ্বারা মুদ্রিত কোরআন মাজিদের ভিতরের পৃষ্ঠা গুলো পাড়া ভিত্তিক ইমেজ আকারে উপস্থাপন করা হয়েছে। প্রতিটি পাড়া একটি ইবুকের মতো সুন্দরভাবে দেখা যাবে।
      </p>

      {paras.map((para, index) => (
        <section key={index}>
          <h3>{para.title}</h3>
          <div className="page-viewer">
            {Array.from({ length: para.totalPages }, (_, i) => {
              const pageNum = String(i + 0).padStart(3, '0');
              const imgSrc = `${basePath}/${para.folder}/page-${pageNum}.jpg`;
              return (
                <img
                  key={pageNum}
                  src={imgSrc}
                  alt={`Page ${pageNum}`}
                  className="page-image"
                />
              );
            })}
          </div>
        </section>
      ))}

      <h4>🛡️ MJ-এর বার্তা:</h4>
      <blockquote>
        “এই পৃষ্ঠাগুলো শুধু পাঠ নয়—এগুলো একটি জাতির নৈতিক দণ্ড। প্রতিটি পাড়া একটি স্মারক, একটি উত্তরাধিকার।”
      </blockquote>
    </main>
  );
};

export default QuranPagesPreview;
