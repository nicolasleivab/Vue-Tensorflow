export type TMediaTrack = {
  stop: () => void;
};

export type TAlertType = "warning" | "error";

export type TAlertValue = {
  type: TAlertType;
  msg: string;
};
