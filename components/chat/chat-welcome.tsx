import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
};

export const ChatWelcome = ({
  name,
  type
}: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      
      <p className="text-xl md:text-3xl font-bold">
        {type === "channel" ? "Let's start class" : ""}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {type === "channel"
          ? ``
          : `This is the start of your conversation with ${name}`
        }
      </p>
    </div>
  )
}