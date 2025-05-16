"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  Heart,
  Users,
  Bookmark,
  ArrowRight,
  FileText,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Session {
  id: string;
  counselorId: string;
  studentId?: number;
  dateTime: string;
  status: 'CONFIRMED' | 'PENDING' | 'CANCELLED';
}

const MOODS = [
  '😊 Happy',
  '😐 Neutral',
  '😢 Sad',
  '😡 Angry',
  '😨 Anxious',
  '😴 Tired',
  '🤩 Excited'
];

const MOOD_SCORES = {
  '😊 Happy': 4,
  '😐 Neutral': 3,
  '😢 Sad': 1,
  '😡 Angry': 2,
  '😨 Anxious': 2,
  '😴 Tired': 3,
  '🤩 Excited': 5
};

async function fetchStudentSessions(studentId: number): Promise<Session[]> {
  try {
    const response = await fetch(`/api/sessions/student/${studentId}`);
    if (!response.ok) {
      if (response.status === 404) return [];
      throw new Error('Failed to fetch student sessions');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching student sessions:', error);
    return [];
  }
}

async function fetchCounselorSessions(counselorId: string): Promise<Session[]> {
  try {
    const response = await fetch(`/api/sessions/counselor/${counselorId}`);
    if (!response.ok) {
      if (response.status === 404) return [];
      throw new Error('Failed to fetch counselor sessions');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching counselor sessions:', error);
    return [];
  }
}

function getLatestMood(logs: any[]) {
  if (!logs.length) return null;
  const today = new Date().toLocaleDateString();
  const todayLogs = logs.filter(log => 
    new Date(log.timestamp).toLocaleDateString() === today
  );
  return todayLogs[0]?.mood || null;
}

function getMoodLabel(mood: string | number) {
  if (!mood) return 'No Data';
  const score = MOOD_SCORES[mood];
  if (score >= 4) return 'Great';
  if (score >= 3) return 'Good';
  if (score >= 2) return 'Okay';
  return 'Low';
}

function formatDateTime(dateTimeStr: string): string {
  const date = new Date(dateTimeStr);
  return date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function MentalHealthPage() {
  const [selectedMood, setSelectedMood] = useState('');
  const [notes, setNotes] = useState('');
  const [logs, setLogs] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLogs = localStorage.getItem('moodLogs');
      return savedLogs ? JSON.parse(savedLogs) : [];
    }
    return [];
  });
  const [showHistory, setShowHistory] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<'student' | 'counselor' | null>(null);

  // Get user info from localStorage
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  const counselorId = typeof window !== 'undefined' ? localStorage.getItem('counselorId') : null;

  useEffect(() => {
    // Determine user role
    if (typeof window !== 'undefined') {
      const userRole = localStorage.getItem('role');
      setRole(userRole as 'student' | 'counselor' | null);
    }
  }, []);

  useEffect(() => {
    const loadSessions = async () => {
      if (!role || (!userId && !counselorId)) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        let fetchedSessions: Session[] = [];
        if (role === 'student' && userId) {
          fetchedSessions = await fetchStudentSessions(Number(userId));
        } else if (role === 'counselor' && counselorId) {
          fetchedSessions = await fetchCounselorSessions(counselorId);
        }
        setSessions(fetchedSessions);
      } catch (error) {
        console.error('Error loading sessions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSessions();
  }, [role, userId, counselorId]);

  const latestMood = getLatestMood(logs);
  const moodLabel = getMoodLabel(latestMood);
  const moodScore = latestMood ? MOOD_SCORES[latestMood] : 0;
  const progressValue = (moodScore / 5) * 100;

  const upcomingSessions = sessions
    .filter(session => new Date(session.dateTime) > new Date() && session.status !== 'CANCELLED')
    .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());

  const nextSession = upcomingSessions[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) return;

    const newLog = {
      mood: selectedMood,
      notes,
      timestamp: new Date().toLocaleString()
    };

    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem('moodLogs', JSON.stringify(updatedLogs));

    setSelectedMood('');
    setNotes('');
  };

  // Function to render session details based on role
  const renderSessionDetails = (session: Session) => {
    if (role === 'student') {
      return (
        <>
          <div className="font-medium">Counseling Session</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {formatDateTime(session.dateTime)}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Counselor ID: {session.counselorId}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="font-medium">Student Session</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {formatDateTime(session.dateTime)}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Student ID: {session.studentId}
          </div>
        </>
      );
    }
  };

  return (
    <PageContainer>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Mental Health Resources
        </h1>
        <p className="text-muted-foreground">
          Access wellness resources, track your mood, and connect with support networks
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="mood-tracker">Mood Tracker</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Today's Mood
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{moodLabel}</div>
                <Progress value={progressValue} className="mt-2" />
                <p className="mt-2 text-xs text-muted-foreground">
                  {latestMood ? `Your current mood: ${latestMood}` : 'No mood logged today'}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-1 text-xs"
                  onClick={() => document.querySelector('[value="mood-tracker"]')?.dispatchEvent(new Event('click'))}
                >
                  <Heart className="h-3 w-3" /> Log mood
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Next Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-sm">Loading...</div>
                ) : nextSession ? (
                  <>
                    <div className="text-sm font-medium">
                      Counseling Session
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDateTime(nextSession.dateTime)}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Status: {nextSession.status}</span>
                    </div>
                  </>
                ) : (
                  <div className="text-sm">No upcoming sessions</div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-1 text-xs"
                  onClick={() => document.querySelector('[value="sessions"]')?.dispatchEvent(new Event('click'))}
                >
                  View all sessions
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Support Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">3 active connections</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Last activity: 3 hours ago
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-1 text-xs"
                >
                  Open chat
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Crisis Helplines</CardTitle>
                <CardDescription>24/7 Emergency Support Services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">National Crisis Line</h4>
                  <p className="text-sm text-muted-foreground">988 - Suicide & Crisis Lifeline</p>
                  <p className="text-xs text-muted-foreground">Available 24/7 across United States</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Crisis Text Line</h4>
                  <p className="text-sm text-muted-foreground">Text HOME to 741741</p>
                  <p className="text-xs text-muted-foreground">Free 24/7 support at your fingertips</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer">
                    Visit 988 Lifeline
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Online Therapy</CardTitle>
                <CardDescription>Professional Counseling Platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">BetterHelp</h4>
                  <p className="text-xs text-muted-foreground">Professional online counseling</p>
                  <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">www.betterhelp.com</a>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Talkspace</h4>
                  <p className="text-xs text-muted-foreground">Online therapy and psychiatry</p>
                  <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">www.talkspace.com</a>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">Note: These are paid services that may offer student discounts</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Free Resources</CardTitle>
                <CardDescription>Self-Help & Educational Materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">NIMH</h4>
                  <p className="text-xs text-muted-foreground">National Institute of Mental Health</p>
                  <a href="https://www.nimh.nih.gov" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">www.nimh.nih.gov</a>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">7 Cups</h4>
                  <p className="text-xs text-muted-foreground">Free online chat with listeners</p>
                  <a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">www.7cups.com</a>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.nimh.nih.gov/health" target="_blank" rel="noopener noreferrer">
                    Browse Resources
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mental Health Apps</CardTitle>
                <CardDescription>Mobile Support Tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Headspace</h4>
                  <p className="text-xs text-muted-foreground">Meditation and mindfulness app</p>
                  <p className="text-xs text-muted-foreground">Free for many students</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Calm</h4>
                  <p className="text-xs text-muted-foreground">Sleep, meditation, and relaxation</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Sanvello</h4>
                  <p className="text-xs text-muted-foreground">Anxiety and depression support</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.headspace.com/studentplan" target="_blank" rel="noopener noreferrer">
                    Student Plans
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Groups</CardTitle>
                <CardDescription>Community Resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">NAMI Support Groups</h4>
                  <p className="text-xs text-muted-foreground">National Alliance on Mental Illness</p>
                  <a href="https://www.nami.org/Support-Education" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Find Local Groups</a>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Active Minds</h4>
                  <p className="text-xs text-muted-foreground">Student mental health organization</p>
                  <a href="https://www.activeminds.org" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">www.activeminds.org</a>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">Most support groups are free to attend</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Educational Resources</CardTitle>
                <CardDescription>Learn About Mental Health</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Mental Health First Aid</h4>
                  <p className="text-xs text-muted-foreground">Learn to help others in crisis</p>
                  <a href="https://www.mentalhealthfirstaid.org" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Get Certified</a>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">MindWise Screening</h4>
                  <p className="text-xs text-muted-foreground">Anonymous mental health screenings</p>
                  <a href="https://screening.mentalhealthscreening.org" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Take a Screening</a>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.mentalhealthfirstaid.org/" target="_blank" rel="noopener noreferrer">
                    Explore Courses
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mood-tracker" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mood Tracker</CardTitle>
              <CardDescription>
                Track your mood patterns over time to identify triggers and
                improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
                    Select Mood
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {MOODS.map(mood => (
                      <Button
                        type="button"
                        variant={selectedMood === mood ? 'default' : 'outline'}
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className="h-12"
                      >
                        {mood}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
                    Notes
                  </label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add any additional notes..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Save Mood Log
                </Button>
              </form>

              {showHistory && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-lg font-semibold">Mood History</h2>
                  {logs.length > 0 ? (
                    logs.map((log: { mood: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; timestamp: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; notes: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-lg">{log.mood}</span>
                          <span className="text-sm text-muted-foreground">
                            {log.timestamp}
                          </span>
                        </div>
                        {log.notes && (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {log.notes}
                          </p>
                        )}
                      </Card>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No mood logs yet. Start tracking your mood!
                    </p>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? 'Hide History' : 'View History'}
              </Button>
              <Button>Log Today's Mood</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{role === 'student' ? 'Your Sessions' : 'Counseling Sessions'}</CardTitle>
              <CardDescription>
                {role === 'student' 
                  ? 'View and manage your counseling sessions' 
                  : 'View and manage your scheduled sessions with students'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-4">Loading sessions...</div>
              ) : !role ? (
                <div className="text-center py-4 text-muted-foreground">
                  Please log in to view sessions
                </div>
              ) : sessions.length > 0 ? (
                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        {renderSessionDetails(session)}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            session.status === 'CONFIRMED' 
                              ? 'bg-green-100 text-green-800' 
                              : session.status === 'PENDING'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {session.status}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  No sessions found
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}

function FileIcon(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <FileText />
    </div>
  );
}
