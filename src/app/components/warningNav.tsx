import Link from "next/link";
import warningNavProps from "../types/componentTypes/warningNavProps";

export function BottomWarning({label,link}:warningNavProps) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" href={link}>
        {link}
      </Link>
    </div>
}
  
export default BottomWarning;