import React, { useState } from 'react';

interface DayActivity {
  day: string;
  activities: string[];
}

const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];

const DayActivity: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [activityInput, setActivityInput] = useState('');
  const [activities, setActivities] = useState<DayActivity[]>([]);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  const handleAddActivity = () => {
    if (!selectedDay || activityInput.trim() === '') return;

    setActivities((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((d) => d.day === selectedDay);

      if (index !== -1) {
        updated[index].activities.push(activityInput);
      } else {
        updated.push({ day: selectedDay, activities: [activityInput] });
      }

      return updated;
    });

    setActivityInput('');
  };

  return (
    <div>
      <h2>Välj en dag</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {days.map((day) => (
          <button key={day} onClick={() => handleDayClick(day)}>
            {day}
          </button>
        ))}
      </div>

      {selectedDay && (
        <div style={{ marginTop: '20px' }}>
          <h3>Aktivitet för {selectedDay}</h3>
          <input
            type="text"
            placeholder="Skriv aktivitet"
            value={activityInput}
            onChange={(e) => setActivityInput(e.target.value)}
          />
          <button onClick={handleAddActivity}>Lägg till</button>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h2>Veckans aktiviteter</h2>
        {activities.map((day) => (
          <div key={day.day}>
            <strong>{day.day}:</strong>
            <ul>
              {day.activities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayActivity;
