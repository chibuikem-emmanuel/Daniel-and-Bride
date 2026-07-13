interface Props {
  title: string;
  value: number;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-yellow-400 mt-2">
        {value}
      </h2>

    </div>
  );
}