import { useSortable } from "@dnd-kit/react/sortable";
import { SortableProps } from "@/libs/definitions";
import Image from "next/image";

export default function Sortable_Item({
  id,
  index,
  color,
  name,
}: SortableProps) {
  const { ref } = useSortable({ id, index });

  return (
    <div
      ref={ref}
      key={index}
      className={` w-[243px] cursor-pointer flex justify-between px-4 rounded-[8px] py-[14px]`}
      style={{ backgroundColor: color }}
    >
      <div className="inline-flex gap-4 font-normal text-white text-[12px] ">
        <Image
          src={`/assets/images/icon-${name.toLowerCase()}.svg`}
          height={32}
          width={32}
          alt={`${id}-icon`}
          className="w-auto h-auto"
          style={{ filter: "invert(100%) brightness(200%)" }}
        />
        <span>{name}</span>{" "}
      </div>
      <Image
        src="/assets/images/icon-arrow-right.svg"
        height={32}
        width={32}
        alt="down"
        className="w-auto h-auto"
      />
    </div>
  );
}
