import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Award,
  Brain,
  FileText,
  MapPin,
  MessageSquare,
  Wallet,
} from "lucide-react";

interface RecentActivityProps {
  extended?: boolean;
}

export function RecentActivity({ extended = false }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      type: "credential",
      title: "Diploma NFT Minted",
      description: "Your Bachelor of Science diploma has been minted as an NFT",
      time: "2 hours ago",
      icon: <Award className="h-4 w-4" />,
      iconBg: "bg-purple-500",
    },
    {
      id: 2,
      type: "mental-health",
      title: "Support Group Contribution",
      description: "You earned 5 UniTokens for your helpful advice",
      time: "Yesterday",
      icon: <Brain className="h-4 w-4" />,
      iconBg: "bg-pink-500",
    },
    {
      id: 3,
      type: "lost-found",
      title: "Item Found",
      description: "Your student ID card has been found near the library",
      time: "2 days ago",
      icon: <MapPin className="h-4 w-4" />,
      iconBg: "bg-blue-500",
    },
    {
      id: 4,
      type: "wallet",
      title: "Tokens Received",
      description: "You received 10 UniTokens from the university",
      time: "3 days ago",
      icon: <Wallet className="h-4 w-4" />,
      iconBg: "bg-green-500",
    },
    {
      id: 5,
      type: "credential",
      title: "Transcript Updated",
      description: "Your academic transcript has been updated with new grades",
      time: "1 week ago",
      icon: <FileText className="h-4 w-4" />,
      iconBg: "bg-purple-500",
    },
    {
      id: 6,
      type: "mental-health",
      title: "Counseling Session",
      description: "You completed a counseling session with Dr. Abebe",
      time: "1 week ago",
      icon: <MessageSquare className="h-4 w-4" />,
      iconBg: "bg-pink-500",
    },
  ];

  const displayActivities = extended ? activities : activities.slice(0, 4);

  return (
    <div className="space-y-4 w-full min-w-0">
      {displayActivities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 min-w-0">
          <div
            className={`${activity.iconBg} flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white`}
          >
            {activity.icon}
          </div>
          <div className="flex-1 space-y-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium truncate">{activity.title}</p>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {activity.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
