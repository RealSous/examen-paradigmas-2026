interface Props {
  label: string;
  color?: string;
}

export const GameBadge = ({ label, color = "bg-gray-200" }: Props) => {
  return (
    <span
      className={`inline-block px-2 py-1 rounded-full text-sm font-semibold text-white ${color}`}
    >
      {label}
    </span>
  );
};
