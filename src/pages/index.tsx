import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Notifin"
      description="Aplikasi Kehadiran Andalan HRD"
      wrapperClassName="homePage"
      noFooter
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#fff',
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '30px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
          }}
        >
          <img
            src="/img/logo-notifin.png" // <-- pastiin path-nya sesuai
            alt="Logo Notifin"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '25px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Teks */}
        <h1 style={{ fontSize: '35px', color: '#000', marginBottom: '10px' }}>
          Notifin
        </h1>
        <p style={{ color: '#555', fontSize: '22px', marginBottom: '30px' }}>
          Rasakan Kemudahan Mengirim Pesan WhatsApp 
        </p>

        {/* Tombol */}
        <a
          href="/docs/intro"
          style={{
            backgroundColor: '#f1f3f4',
            color: '#000',
            padding: '10px 25px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          Lihat Panduan
        </a>
      </main>
    </Layout>
  );
}
