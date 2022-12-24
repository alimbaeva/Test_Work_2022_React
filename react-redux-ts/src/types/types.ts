export interface IOptions {
  id: string;
  placeholder: string;
  options: {
    nation: string[];
  };
}

export interface ICard {
  id: string;
  title: string;
  region: string;
}

export interface IPropsCard {
  props: ICard;
}
