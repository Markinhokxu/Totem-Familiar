'use client';

import React from 'react';
import { Profile, Member } from '../types';

interface HeaderProfilesProps {
  profiles: Profile[];
  activeProfile: Member;
  onSelectProfile: (role: Member) => void;
}

export default function HeaderProfiles({
  profiles,
  activeProfile,
  onSelectProfile,
}: HeaderProfilesProps) {
  return (
    <header className="bg-slate-800 text-white p-4 rounded-xl shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Painel Familiar</h1>
        <span className="text-sm bg-slate-700 px-3 py-1 rounded-full">
          Ativo: {activeProfile}
        </span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        <button
          onClick={() => onSelectProfile('Todos')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeProfile === 'Todos'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Todos
        </button>
        {profiles.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelectProfile(p.role)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              activeProfile === p.role
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <span>{p.avatar}</span>
            <span>{p.name}</span>
          </button>
        ))}
      </div>
    </header>
  );
}