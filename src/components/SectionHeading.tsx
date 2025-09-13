type Props = { title: string; subtitle?: string; center?: boolean };

export default function SectionHeading({ title, subtitle, center }: Props) {
  return (
    <div className={center ? "text-center" : undefined}>
      <div className="space-y-6">
        <h2 className="heading-2 inline-block">
          {title}
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        {subtitle && (
          <p className="body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}




