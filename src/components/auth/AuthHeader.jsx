function AuthHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-3 w-full mb-10">
      <div className="font-semibold text-3xl">{title}</div>
      <div className="text-sm text-center font-light">{subtitle}</div>
    </div>
  );
}

export default AuthHeader;
