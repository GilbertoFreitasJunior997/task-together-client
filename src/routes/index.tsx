import { trpc } from "@/lib/trpc";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { mutate } = trpc.auth.signIn.useMutation();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>

      <button
        type="button"
        onClick={() => {
          mutate({
            email: "test@mail.com",
            username: "MyName",
            password: "123",
          });
        }}
      >
        LOGIN
      </button>
    </div>
  );
}
