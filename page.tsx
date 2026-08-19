'use client';

import React, { useState } from 'react';
import HeaderProfiles from './components/HeaderProfiles';
import ShoppingTab from './components/ShoppingTab';
import AgendaTab from './components/AgendaTab';
import { Profile, Member } from './types';

export default function Home() {
  const [activeProfile, setActiveProfile] = useState<Member>('Todos');
  const [activeTab, setActiveTab] = useState<'shopping' | 'agenda'>('shopping');

  const profilesList: Profile[] = [
    { id: '1', name: 'Pai', role: 'Pai', avatar: '👨' },
    { id: '2', name: 'Mãe', role: 'Mãe', avatar: '👩' },
    { id: '3', name: 'Filho', role: 'Filho', avatar: '👦' },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8 max-w-4xl mx-auto">
      <HeaderProfiles
        profiles={profilesList}
        activeProfile={activeProfile}
        onSelectProfile={setActiveProfile}
      />

      <div className="flex gap-4 mb-6 border-b border-slate-300 pb-2">
        <button
          onClick={() => setActiveTab('shopping')}
          className={`pb-2 px-4 font-semibold transition ${
            activeTab === 'shopping'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Compras
        </button>
        <button
          onClick={() => setActiveTab('agenda')}
          className={`pb-2 px-4 font-semibold transition ${
            activeTab === 'agenda'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Agenda
        </button>
      </div>

      {activeTab === 'shopping' ? (
        <ShoppingTab activeProfile={activeProfile} />
      ) : (
        <AgendaTab activeProfile={activeProfile} />
      )}
    </main>
  );
}