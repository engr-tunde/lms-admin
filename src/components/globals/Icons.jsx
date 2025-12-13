import {
  Plus,
  Clock,
  Trash2,
  Edit,
  ChevronDown,
  ChevronUp,
  GripVertical,
  CheckCircle,
  XCircle,
  Menu,
  Search,
  Upload,
  Download,
  User,
  Users,
  FolderOpen,

  DollarSign,
  FileText,
  Video,
  Award, 
  AlertCircle,
  List,
  PlaySquare,
  BookOpen,
  Building2,
  CreditCard,
  Mail, 
  MapPin, 
  Phone,
  TrendingUp,
  Calendar

} from "lucide-react";

export const CloseIcon = (props) => <XCircle {...props} />;
export const MenuIcon = (props) => <Menu {...props} />;
export const SearchIcon = (props) => <Search {...props} />;
export const UploadIcon = (props) => <Upload {...props} />;
export const BookIcon = (props) => <BookOpen {...props} />;
export const FolderIcon = (props) => <FolderOpen {...props} />;


//Used Icons
export const PlusIcon = (props) => <Plus {...props} />;
export const ClockIcon = (props) => <Clock {...props} />;
export const TrashIcon = (props) => <Trash2 {...props} />;
export const EditIcon = (props) => <Edit {...props} />;
export const ChevronDownIcon = (props) => <ChevronDown {...props} />;
export const ChevronUpIcon = (props) => <ChevronUp {...props} />;
export const GripIcon = (props) => <GripVertical {...props} />;
export const DollarIcon = (props) => <DollarSign {...props} />; 
export const DocumentTextIcon = (props) => <FileText {...props} />;
export const VideoCamIcon = (props) => <Video {...props} />;
export const AwardIcon = (props) => <Award {...props} />;
export const AlertCircleIcon = (props) => <AlertCircle {...props} />;
export const PlayButtonIcon = (props) => <PlaySquare {...props} />;
export const ListColumnsIcon = (props) => <List {...props} />;
export const BuildingIcon = (props) => <Building2 {...props} />;
export const CreditCardIcon = (props) => <CreditCard {...props} />;
export const UserIcon = (props) => <User {...props} />;
export const UsersIcon = (props) => <Users {...props} />;
export const MailIcon = (props) => <Mail {...props} />;
export const MapIcon = (props) => <MapPin {...props} />;
export const PhoneIcon = (props) => <Phone {...props} />;
export const CheckIcon = (props) => <CheckCircle {...props} />;
export const TrendingUpIcon = (props) => <TrendingUp {...props} />;
export const PlayIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);
export const CalendarIcon = (props) => <Calendar {...props} />;
export const DownloadIcon = (props) => <Download {...props} />;





