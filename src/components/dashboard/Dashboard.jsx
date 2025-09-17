import React, { useState, useEffect } from 'react';
import { New } from './New';
import { DashboardHeader } from './DashboardHeader';
import { StatsCard } from './StatsCard';
import { TrainingSessionCard } from './TrainingSessionCard';
import { CandidateTable } from './CandidateTable';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Calendar, Users, BookOpen, TrendingUp, Plus, Filter } from 'lucide-react';





const mockSessions = [
  {
    id: '1',
    title: 'React.js Advanced Patterns',
    description: 'Deep dive into advanced React patterns including hooks, context, and performance optimization.',
    start_time: '2025-01-15T09:00:00Z',
    end_time: '2025-01-15T17:00:00Z',
    max_participants: 25,
    trainer_id: '1',
    status: 'scheduled',
    created_at: '2025-01-10T00:00:00Z',
  },
  {
    id: '2',
    title: 'Python for Data Science',
    description: 'Comprehensive training on Python libraries for data analysis and machine learning.',
    start_time: '2025-01-20T10:00:00Z',
    end_time: '2025-01-22T16:00:00Z',
    max_participants: 30,
    trainer_id: '2',
    status: 'ongoing',
    created_at: '2025-01-08T00:00:00Z',
  },
  {
    id: '3',
    title: 'Database Design Fundamentals',
    description: 'Learn the principles of relational database design and SQL optimization.',
    start_time: '2025-01-12T14:00:00Z',
    end_time: '2025-01-12T18:00:00Z',
    max_participants: 20,
    trainer_id: '3',
    status: 'completed',
    created_at: '2025-01-05T00:00:00Z',
  },
 
];

const mockCandidates = [
  {
    id: '1',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Engineering',
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '2',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@company.com',
    phone: '+1 (555) 234-5678',
    department: 'Design',
    created_at: '2025-01-02T00:00:00Z',
  },
  {
    id: '3',
    first_name: 'Mike',
    last_name: 'Johnson',
    email: 'mike.johnson@company.com',
    phone: '+1 (555) 345-6789',
    department: 'Marketing',
    created_at: '2025-01-03T00:00:00Z',
  },
  {
    id: '4',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@company.com',
    phone: '+1 (555) 234-5678',
    department: 'Design',
    created_at: '2025-01-02T00:00:00Z',
  },
];

export const Dashboard = () => {
  const [sessions, setSessions] = useState(mockSessions);
  const [candidates, setCandidates] = useState(mockCandidates);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleViewSessionDetails = (session) => {
    setSelectedSession(session);
  };

  const stats = {
    totalSessions: sessions.length,
    activeCandidates: candidates.length,
    completedTrainings: sessions.filter(s => s.status === 'completed').length,
    upcomingSessions: sessions.filter(s => s.status === 'scheduled').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Sessions"
            value={stats.totalSessions}
            icon={Calendar}
            trend={{ value: 12, isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Active Candidates"
            value={stats.activeCandidates}
            icon={Users}
            trend={{ value: 8, isPositive: true }}
            color="teal"
          />
          <StatsCard
            title="Completed Trainings"
            value={stats.completedTrainings}
            icon={BookOpen}
            trend={{ value: 23, isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Upcoming Sessions"
            value={stats.upcomingSessions}
            icon={TrendingUp}
            trend={{ value: 5, isPositive: true }}
            color="purple"
          />
        </div>

        {/* Training Sessions */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Training Sessions</h2>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="primary" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Session
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <TrainingSessionCard
                key={session.id}
                session={session}
                onViewDetails={handleViewSessionDetails}
              />
            ))}
          </div>
        </div>

        {/* Candidates Table */}
        <CandidateTable candidates={candidates} />

        {/* Recent Activity */}
        <Card className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  New candidate John Doe registered for React.js training
                </p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Database Design training completed with 95% attendance
                </p>
                <p className="text-xs text-gray-600">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Python for Data Science session started
                </p>
                <p className="text-xs text-gray-600">3 days ago</p>
              </div>
            </div>
          </div>
          <New/>
        </Card>
      </main>
    </div>
  );
};