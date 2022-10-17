import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  height: "$10",
});

export function App() {
  return (
    <div>
      <Button>Hello World!</Button>
    </div>
  );
}
