type ILogo = {
  enabled?: boolean;
  src?: string;
  size?: number;
  animation?: {
    name: string;
    duration?: string;
  };
};

const Logo = (data: ILogo) => {
  return (
    (data.enabled || true) && (
      <img
        className={`logo ${data?.animation?.name}`}
        style={{ animationDuration: (data?.animation?.duration) || "1s" }}
        src={data.src}
        alt="logo"
        width={data.size || 300}/>
    )
  );
};

export default Logo;
