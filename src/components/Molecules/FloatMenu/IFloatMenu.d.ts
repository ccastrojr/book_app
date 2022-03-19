interface IOption {
  label: string;
  clickEvent: () => void;
  disabled?: boolean;
}

interface IFloatMenu {
  visible: boolean;
  options: IOption[];
}

export { IFloatMenu, IOption };
