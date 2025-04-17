import React from 'react';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Benefits } from '@/components/sections/Benefits';
import { DataSecurity } from '@/components/sections/DataSecurity';
import { Testimonials } from '@/components/sections/Testimonials';
import { Recognition } from '@/components/sections/Recognition';
import { Faq } from '@/components/sections/Faq';
import { Cta } from '@/components/sections/Cta';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', background: '#f8fafc', color: '#0f172a' }}>
      {/* Sidebar */}
      <div style={{ width: '240px', height: '100vh', backgroundColor: '#0f172a', color: '#fff', padding: '30px 20px', position: 'fixed' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '40px' }}>Docure.ai</h2>
        <a href="#" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', margin: '16px 0', padding: '10px 14px', borderRadius: '8px', transition: 'background 0.2s' }}>🏠 Home</a>
        <a href="#" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', margin: '16px 0', padding: '10px 14px', borderRadius: '8px', transition: 'background 0.2s' }}>💬 Chat History</a>
        <a href="#" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', margin: '16px 0', padding: '10px 14px', borderRadius: '8px', transition: 'background 0.2s' }}>🧠 Recommendations</a>
        <a href="#" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', margin: '16px 0', padding: '10px 14px', borderRadius: '8px', transition: 'background 0.2s' }}>👤 Profile</a>
        <a href="#" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', margin: '16px 0', padding: '10px 14px', borderRadius: '8px', transition: 'background 0.2s' }}>🚪 Logout</a>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '240px', width: 'calc(100% - 240px)', padding: '30px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
          <h1 style={{ fontSize: '24px' }}>Welcome back, User 👋</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Health Overview</h3>
            <p style={{ fontSize: '14px', color: '#475569' }}>Your general health is looking great. Keep up the routine!</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Recent Activity</h3>
            <p style={{ fontSize: '14px', color: '#475569' }}>You had 3 interactions with Elivia this week.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Insights</h3>
            <p style={{ fontSize: '14px', color: '#475569' }}>Based on your chats, we recommend drinking more water 💧</p>
          </div>
        </div>
      </div>
    </div>
  );
}