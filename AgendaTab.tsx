'use client';

import React, { useState } from 'react';
import { CalendarEvent, Member } from '../types';

interface AgendaTabProps {
  activeProfile: Member;
}

export default function AgendaTab({ activeProfile }: AgendaTabProps) {
  const [events] = useState<CalendarEvent[]>([
    { id: '1', title: 'Médico', date: '2026-08-20', time: '14:00', assignedTo: 'Mãe', category: 'Saúde' },
    { id: '2', title: 'Reunião de Pais', date: '2026-08-22', time: '19:00', assignedTo: 'Pai', category: 'Escola' },
  ]);

  const filteredEvents = events.filter(
    (e) => activeProfile === 'Todos' || e.assignedTo === activeProfile
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-lg font-bold mb-4 text-slate-800">📅 Agenda Familiar</h2>
      
      <div className="space-y-3">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="p-4 border border-slate-200 rounded-lg flex justify-between items-center bg-slate-50"
          >
            <div>
              <h3 className="font-semibold text-slate-800">{event.title}</h3>
              <p className="text-sm text-slate-500">
                {event.date} às {event.time}
              </p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              {event.assignedTo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}