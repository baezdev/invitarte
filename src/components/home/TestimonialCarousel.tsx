interface Props {
  total: number;
  current: number;
}

export const TestimonialsCarousel = ({ total, current }: Props) => {
  const number = [];

  for (let i = 1; i <= total; i++) {
    number.push(i);
  }

  return (
    <div className="flex gap-3">
      {number.map((n, i) => (
        <span
          key={i}
          className={`w-3 h-3 ${
            current === i ? "bg-third" : "bg-gray-200"
          } rounded-full inline-block`}
        ></span>
      ))}
    </div>
  );
};
