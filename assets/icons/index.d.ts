import HomeIcon from "./Home";
import ArrowLeftIcon from "./ArrowLeft";
import Mail from "./Mail";
import Lock from "./Lock";
import User from "./User";
import EditIcon from "./Edit";
import Heart from "./Heart";
import Plus from "./Plus";
import Call from "./Call";
import Camera from "./Camera";

export const icons = {
  home: HomeIcon,
  arrowLeft: ArrowLeftIcon,
  edit: EditIcon,
  mail: Mail,
  lock: Lock,
  user: User,
  heart: Heart,
  plus: Plus,
  call: Call,
  camera: Camera,
};

export interface IconProps {
  name: keyof typeof icons; // Ensures only keys from the 'icons' object are allowed
  size?: number;
  strokeWidth?: number;
  color?: string;
  [key: string]: unknown; // This allows any additional props to be passed
}
