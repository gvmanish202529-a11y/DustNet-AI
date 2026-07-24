import {
  User,
  Mail,
  Phone,
  Shield,
  Building2,
  BadgeCheck,
  Calendar,
  MapPin,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Operator Profile
        </h1>

        <p className="mt-2 text-slate-400">
          View your account information and operator details.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col items-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-orange-500">
              <User size={55} className="text-white" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Operator
            </h2>

            <p className="text-slate-400">
              DustNet Control Center
            </p>

            <span className="mt-4 rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              Active
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Personal Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard icon={<Mail />} title="Email" value="operator@dustnet.ai" />
            <InfoCard icon={<Phone />} title="Phone" value="+91 98765 43210" />
            <InfoCard icon={<Shield />} title="Role" value="Mission Operator" />
            <InfoCard icon={<Building2 />} title="Department" value="Industrial Safety" />
            <InfoCard icon={<BadgeCheck />} title="Access Level" value="Administrator" />
            <InfoCard icon={<Calendar />} title="Joined" value="July 2026" />
            <InfoCard icon={<MapPin />} title="Location" value="Chennai, India" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="rounded-xl bg-slate-800 p-5">
    <div className="mb-3 flex items-center gap-3 text-orange-500">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>

    <p className="text-slate-300">{value}</p>
  </div>
);

export default Profile;