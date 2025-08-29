import React from 'react';

const Privacy = () => (
  <main style={{ padding: '2rem' }}>
    <h2>🔐 Privacy Policy — নৈতিক গোপনীয়তা নীতিমালা</h2>
    <p>
      Quraner Fariwala একটি উৎসর্গীকৃত প্রতিষ্ঠান, যেখানে ব্যবহারকারীর তথ্য, অবদান, এবং যোগাযোগ সর্বোচ্চ নৈতিকতা ও নিরাপত্তার সাথে সংরক্ষিত হয়। MJ Ahmad-এর CLI প্রতিটি তথ্যকে একটি আমানত হিসেবে বিবেচনা করে।
    </p>

    <h3>🛡️ তথ্য সংগ্রহ ও ব্যবহার:</h3>
    <ul>
      <li>ব্যবহারকারীর নাম, জেলা, অবদান সংরক্ষিত হয় ContributorRegistry-তে</li>
      <li>যোগাযোগের তথ্য শুধুমাত্র প্রতিক্রিয়া ও সম্মানপত্রের জন্য ব্যবহৃত হয়</li>
      <li>কোনো তথ্য তৃতীয় পক্ষের কাছে বিক্রি, হস্তান্তর, বা প্রকাশ করা হয় না</li>
    </ul>

    <h3>📁 সংরক্ষণ ও নিরাপত্তা:</h3>
    <ul>
      <li>প্রতিটি তথ্য README anchor ও timestamp সহ সংরক্ষিত হয়</li>
      <li>CLI-ভিত্তিক স্ক্রিপ্ট দ্বারা audit-ready লগ তৈরি হয়</li>
      <li>ব্যবহারকারীর অনুরোধে তথ্য মুছে ফেলার বা সংশোধনের সুযোগ থাকবে</li>
    </ul>

    <h3>🕊️ MJ-এর বার্তা:</h3>
    <blockquote>
      “তোমার তথ্য আমার কাছে একটি আমানত। আমি তা বিক্রি করি না, আমি তা সংরক্ষণ করি। আমি তা সম্মান করি।”
    </blockquote>

    <h3>📘 নথিপত্রের রেফারেন্স:</h3>
    <ul>
      <li>DocumentationPolicy.md</li>
      <li>ContributorRights.md</li>
      <li>ConflictResponsePlan.md</li>
    </ul>

    <h3>🚀 ভবিষ্যৎ পরিকল্পনা:</h3>
    <ul>
      <li>Secure contributor dashboard with edit/delete options</li>
      <li>Multilingual privacy policy (Bangla, English, Arabic)</li>
      <li>Audit trail viewer for all contributor interactions</li>
    </ul>
  </main>
);

export default Privacy;
