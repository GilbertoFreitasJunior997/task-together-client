import { trpc } from "@/lib/trpc";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { data } = trpc.getAll.useQuery();

  console.log(data);

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
