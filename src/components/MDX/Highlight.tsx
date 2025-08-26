interface HightlightProps {
  children: React.ReactNode;
  color?: "yellow" | "green" | "blue" | "red" | "pink";
}

const Highlight = ({ children, color = "yellow" }: HightlightProps) => {
  const colorMap = {
    yellow: "bg-yellow-200 dark:bg-yellow-600",
    green: "bg-green-200 dark:bg-green-600",
    blue: "bg-blue-200 dark:bg-blue-600",
    red: "bg-red-200 dark:bg-red-600",
    pink: "bg-pink-200 dark:bg-pink-600",
  }

  return (
    <span
      className={`px-1 py-0.5 rounded-md font-medium ${colorMap[color]}`}
    >
      {children}
    </span>
  )
}

export default Highlight;