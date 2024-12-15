export function SliderControl({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1 
}) {
  return (
    <label className="block text-sm text-gray-600 dark:text-gray-300">
      <span className="flex justify-between">
        {label}
        <span className="text-gray-500">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="block w-full mt-1"
      />
    </label>
  )
}