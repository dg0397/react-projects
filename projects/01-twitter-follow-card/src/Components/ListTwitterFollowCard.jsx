import { TwitterFollowCard } from "./TwitterFollowCard";

export function ListTwitterFollowCard({ users }) {
  return (
    <>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          username={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </>
  );
}
